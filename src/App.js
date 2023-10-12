import { useState } from 'react';  // Importing useState hook from React
import './App.css';  // Importing the stylesheet

function App() {
  // State to store the result of calculations
  const [result, setResult] = useState("");  // Destructuring assignment for useState

  // Function to handle button clicks and update the result state
  const handleClick = (e) => {
    setResult(result.concat(e.target.id));  // Concatenate the clicked button's id to the result
  };

  // Function to clear the result
  const clear = () => {
    setResult("");  // Set the result to an empty string
  }

  // Function to delete the last character from the result
  const deleteElement = () => {
    setResult(result.slice(0, -1));  // Remove the last character from the result
  };

  // Function to evaluate and display the result
  const calculate = () => {
    try {
      // Using eval to calculate the result (with caution)
      setResult(eval(result).toString());  // Evaluate the result and convert it to a string
    } catch (error) {
      // Handling invalid expressions
      setResult("NaN");  // Display "NaN" for invalid expressions
    }
  }

  return (
    <>
      {/* button for calculator */}
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
