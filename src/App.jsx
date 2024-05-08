import { useState } from "react";
import "./App.css";
import { para } from "./data";
import ParaList from "./ParaList";
function App() {
  const [noOfpara, setnoOfpara] = useState(0);
  const [data, setData] = useState([]);
  const handleGenerate = (nu) => {
    let newarr = [...data];
    for (let i = data.length; i < nu; i++) {
      newarr.push(para[i]);
    }
    setData(newarr);
  };
  console.log(data);
  return (
    <div>
      <div className="input_container">
        <h1>TIRED OF BORING LOREM IPSUM?</h1>
        <div className="text">
          <span>Paragraphs:</span>
          <input
            type="number"
            value={noOfpara}
            onChange={(e) => setnoOfpara(e.target.value)}
          />
          <button onClick={() => handleGenerate(noOfpara)}>Generate</button>
        </div>
      </div>

      {data.map((ele, index) => {
        return <ParaList key={index} data={ele.para} />;
      })}
    </div>
  );
}

export default App;
