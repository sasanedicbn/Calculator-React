import "./App.css";
import { useState } from "react";

function Calculator() {
  const [firstOperand, setFirstOperand] = useState("0");
  const [secondOperand, setSecondOperand] = useState("");
  const [operation, setOperation] = useState("");

  const chooseNumber = (e) => {
    const value = e.target.textContent;

    if (firstOperand === "0") {
      setFirstOperand("");
    }
    setFirstOperand((prev) => prev + value);
  };
  
  const clearOperands = () => {
    setFirstOperand("0");
    setSecondOperand("");
    setOperation("");
  };

  const chooseOperator = (e) => {
    const value = e.target.textContent;

    if (!firstOperand) return;

    if (firstOperand && secondOperand && operation) {
      const result = String(
        calculateResult(firstOperand, secondOperand, operation)
      );
      setSecondOperand(result);
      setFirstOperand("");
      setOperation(value);
    } else {
      setSecondOperand(firstOperand);
      setFirstOperand("");
      setOperation(value);
    }
  };

  const chooseEquals = () => {
    const result = String(
      calculateResult(firstOperand, secondOperand, operation)
    );
    setFirstOperand(result);
    setSecondOperand("");
    setOperation("");
  };

  const calculateResult = (first:string, second:string, operation:string) => {
    const firstToNumber = Number(first);
    const secondToNumber = Number(second);
    let result;
    switch (operation) {
      case "+":
        result = secondToNumber + firstToNumber;
        break;
      case "-":
        result = secondToNumber - firstToNumber;
        break;
      case "*":
        result = secondToNumber * firstToNumber;
        break;
      case "/":
        result = secondToNumber / firstToNumber;
        break;
      default:
        result = NaN;
    }
    return result;
  };

  const chooseDot = (e) => {
    const value = e.target.textContent;
    if (firstOperand.length === 0 && !firstOperand.includes(".")) {
      setFirstOperand("0" + value);
    } else if (!firstOperand.includes(".")) {
      setFirstOperand((prev) => prev + value);
    }
  };


  const deleteOperand = () => {
    if (firstOperand !== "0") {
      setFirstOperand((prev) => {
        const result = prev.slice(0, -1);
        return result === "" ? "0" : result;
      });
    }
  };

  return (
    <>
      <div className="calculator">
        <div className="display">
          <div className="calculations">
            {secondOperand}
            {operation}
          </div>
          <div className="resultDiv">{firstOperand}</div>
        </div>

        <div className="clearDelete">
          <button className="clearBtn" onClick={clearOperands}>
            CLEAR
          </button>
          <button className="deleteBtn" onClick={deleteOperand}>
            DELETE
          </button>
        </div>
        <div className="buttons">
          <button onClick={chooseNumber} className="numberBtn">
            7
          </button>
          <button onClick={chooseNumber} className="numberBtn">
            8
          </button>
          <button onClick={chooseNumber} className="numberBtn">
            9
          </button>
          <button onClick={chooseOperator} className="operatorBtn">
            /
          </button>
          <button onClick={chooseNumber} className="numberBtn">
            4
          </button>
          <button onClick={chooseNumber} className="numberBtn">
            5
          </button>
          <button onClick={chooseNumber} className="numberBtn">
            6
          </button>
          <button onClick={chooseOperator} className="operatorBtn">
            *
          </button>
          <button onClick={chooseNumber} className="numberBtn">
            1
          </button>
          <button onClick={chooseNumber} className="numberBtn">
            2
          </button>
          <button onClick={chooseNumber} className="numberBtn">
            3
          </button>
          <button onClick={chooseOperator} className="operatorBtn">
            -
          </button>
          <button onClick={chooseNumber} className="numberBtn">
            0
          </button>
          <button onClick={chooseDot} className="dotBtn">
            .
          </button>
          <button onClick={chooseEquals} className="equalBtn">
            =
          </button>
          <button onClick={chooseOperator} className="operatorBtn">
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
