import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import './App.css';
import Selection from "./components/Selection";

function App() {
  const [prompt, setPrompt] = useState(""); /* Variable for getting input for image generation */ 
  const [result, setResult] = useState('')
  const configuration = new Configuration({
    apiKey: "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" ,
  });
  
  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });

    setResult(res.data.data[0].url);
  };

  return ( 
  <div className="app-main">
    <h1 className="app-headingTxt">Generate an Image using OpenAI Api</h1>
    <input 
      className="app-input"
      placeholder="Which Image do you want"
      onChange={(e) => setPrompt(e.target.value)}
    />
    <button onClick={generateImage}>Generate an Image</button>
    
    {result.length > 0 ? <img className="result-img" src={result} alt="result" /> : <></>}
  </div>

  );
}

export default App;

