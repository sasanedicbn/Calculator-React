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

  const chooseOperator = (e: MouseEvent<HTMLDivElement>) => {
    const value =  (e.target as HTMLDivElement).textContent;

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

  const clearOperands = () => {
    setFirstOperand("0");
    setSecondOperand("");
    setOperation("");
  };

  const deleteOperand = () => {
    if (firstOperand !== "0") {
      setFirstOperand((prev) => {
        const Result = prev.slice(0, -1);
        return Result === "" ? "0" : Result;
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
          <div className="clearBtn" onClick={clearOperands}>
            CLEAR
          </div>
          <div className="deleteBtn" onClick={deleteOperand}>
            DELETE
          </div>
        </div>
        <div className="buttons">
          <div onClick={chooseNumber} className="numberBtn">
            7
          </div>
          <div onClick={chooseNumber} className="numberBtn">
            8
          </div>
          <div onClick={chooseNumber} className="numberBtn">
            9
          </div>
          <div onClick={(e) => chooseOperator(e)} className="operatorBtn">
            /
          </div>
          <div onClick={chooseNumber} className="numberBtn">
            4
          </div>
          <div onClick={chooseNumber} className="numberBtn">
            5
          </div>
          <div onClick={chooseNumber} className="numberBtn">
            6
          </div>
          <div onClick={chooseOperator} className="operatorBtn">
            *
          </div>
          <div onClick={chooseNumber} className="numberBtn">
            1
          </div>
          <div onClick={chooseNumber} className="numberBtn">
            2
          </div>
          <div onClick={chooseNumber} className="numberBtn">
            3
          </div>
          <div onClick={chooseOperator} className="operatorBtn">
            -
          </div>
          <div onClick={chooseNumber} className="numberBtn">
            0
          </div>
          <div onClick={chooseDot} className="dotBtn">
            .
          </div>
          <div onClick={chooseEquals} className="equalBtn">
            =
          </div>
          <div onClick={chooseOperator} className="operatorBtn">
            +
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;

