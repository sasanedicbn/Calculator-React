import { useState } from "react";

const Calculator = () => {
  const [firstOutput, setFirstOutput] = useState(0)
  const [secondOutput, setSecondOutput] = useState('')
  const [operation, setOperation] = useState('')

  return (
    <div className="calculator-container"> 
      <div className="calculator">
        <div className="output-secondary">{secondOutput}</div>
        <div className="output-first">{firstOutput}</div>
      </div>
      <div className="buttons">
        <button className="btn btn-clear">CLEAR</button>
        <button className="btn btn-delete">DELETE</button>
        <button className="btn btn-number">7</button>
        <button className="btn btn-number">8</button>
        <button className="btn btn-number">9</button>
        <button className="btn btn-operation">/</button>

        <button className="btn btn-number">4</button>
        <button className="btn btn-number">5</button>
        <button className="btn btn-number">6</button>
        <button className="btn btn-operation">*</button>

        <button className="btn btn-number">1</button>
        <button className="btn btn-number">2</button>
        <button className="btn btn-number">3</button>
        <button className="btn btn-operation">-</button>

        <button className="btn btn-dot">.</button>
        <button className="btn btn-number">0</button>
        <button className="btn btn-operation-equal">=</button>
        <button className="btn btn-operation">+</button>
      </div>
    </div>
  );
};

export default Calculator;
