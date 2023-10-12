import { useState } from 'react';
import './App.css';

function App() {

  const [result, setResult] = useState("");

  const handleClick = (e) =>{
    setResult(result.concat(e.target.id));
  };

  const clear = () =>{
    setResult("");
  }

  const deleteElement = () =>{
    setResult(result.slice(0, -1));
  };

  const calculate = () =>{
    try{
      setResult(eval(result).toString());
    }catch(error){
      setResult("NaN");
    }
  }

  return (
    <>
      <div className="container">
      <div className="calculator">
        <input type="text" id="inputBox" value={result} placeholder="0" />
        <div>
          <button className="button operator" onClick={clear}>AC</button>
          <button className="button operator" onClick={deleteElement}>DEL</button>
          <button id="%" className="button operator" onClick={handleClick}>%</button>
          <button id="/" className="button operator" onClick={handleClick}>/</button>
        </div>
        <div>
          <button id="7" className="button" onClick={handleClick}>7</button>
          <button id="8" className="button" onClick={handleClick}>8</button>
          <button id="9" className="button" onClick={handleClick}>9</button>
          <button id="*" className="button operator" onClick={handleClick}>*</button>
        </div>
        <div>
          <button id="4" className="button" onClick={handleClick}>4</button>
          <button id="5" className="button" onClick={handleClick}>5</button>
          <button id="6" className="button" onClick={handleClick}>6</button>
          <button id="-" className="button operator" onClick={handleClick}>-</button>
        </div>
        <div>
          <button id="1" className="button" onClick={handleClick}>1</button>
          <button id="2" className="button" onClick={handleClick}>2</button>
          <button id="3" className="button" onClick={handleClick}>3</button>
          <button id="+" className="button operator" onClick={handleClick}>+</button>
        </div>

        <div>
          <button id="0" className="button" onClick={handleClick}>0</button>
          <button id="00" className="button" onClick={handleClick}>00</button>
          <button id="." className="button" onClick={handleClick}>.</button>
          <button id="=" className="button equalBtn" onClick={calculate}>=</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
