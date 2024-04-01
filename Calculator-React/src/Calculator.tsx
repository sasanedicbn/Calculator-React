import React, { useState } from 'react';

const Calculator = () => {
    const [firstOutput, setFirstOutput] = useState("0");
    const [secondOutput, setSecondOutput] = useState('');
    const [operation, setOperation] = useState('');

    function resetCalculator() {
        setFirstOutput("0");
        setSecondOutput("");
        setOperation("");
    }

    function inputNumber(number) {
        if (!operation || (operation && !secondOutput)) {
            setFirstOutput((prevOutput) => prevOutput === "0" ? number : prevOutput + number);
        } else if (operation && secondOutput) {
            setFirstOutput((prevOutput) => prevOutput + number);
        }
    }

    function setOperationFunc(op) {
        if (operation !== "") {
            logicOperation();
        }

        setOperation(op);
        setSecondOutput(`${firstOutput}${op}`);
        setFirstOutput("");
    }

    function logicOperation() {
        let result = null;
        let firstNum = parseFloat(firstOutput);
        let secondNum = parseFloat(secondOutput);

        switch (operation) {
            case "+":
                result = firstNum + secondNum;
                break;
            case "-":
                result = secondNum - firstNum;
                break;
            case "/":
                if (firstNum === 0) {
                    alert("Cannot divide by zero");
                    return;
                }
                result = secondNum / firstNum;
                break;
            case "*":
                result = firstNum * secondNum;
                break;
            default:
                return;
        }

        setFirstOutput(result.toString());
        setSecondOutput("");
        setOperation("");
    }

    function deleteOneElement() {
        if (firstOutput.length > 0) {
            setFirstOutput((prevOutput) => prevOutput.slice(0, -1));
        }
    }

    

    return (
        <div className="container">
            <div className="calculator">
                <div className="output-secondary">{secondOutput}</div>
                <div className="output-first">{firstOutput}</div>
            </div>
            <div className="buttons">
                <button className="btn btn-clear" onClick={resetCalculator}>CLEAR</button>
                <button className="btn btn-delete" onClick={deleteOneElement}>DELETE</button>
                <button className="btn btn-number" onClick={() => inputNumber('7')}>7</button>
                <button className="btn btn-number" onClick={() => inputNumber('8')}>8</button>
                <button className="btn btn-number" onClick={() => inputNumber('9')}>9</button>
                <button className="btn btn-operation" onClick={() => setOperationFunc('/')}>/</button>

                <button className="btn btn-number" onClick={() => inputNumber('4')}>4</button>
                <button className="btn btn-number" onClick={() => inputNumber('5')}>5</button>
                <button className="btn btn-number" onClick={() => inputNumber('6')}>6</button>
                <button className="btn btn-operation" onClick={() => setOperationFunc('*')}>*</button>

                <button className="btn btn-number" onClick={() => inputNumber('1')}>1</button>
                <button className="btn btn-number" onClick={() => inputNumber('2')}>2</button>
                <button className="btn btn-number" onClick={() => inputNumber('3')}>3</button>
                <button className="btn btn-operation" onClick={() => setOperationFunc('-')}>-</button>

                <button className="btn btn-dot" onClick={inputDecimal}>.</button>
                <button className="btn btn-number" onClick={() => inputNumber('0')}>0</button>
                <button className="btn btn-operation-equal" onClick={logicOperation}>=</button>
                <button className="btn btn-operation" onClick={() => setOperationFunc('+')}>+</button>
            </div>
        </div>
    );
};

export default Calculator;


{/* <div className='container'>
    <img src="link slike"/>
    <h3>Jessica Randal</h3>
    <p>London, United Kingdom</p>
    <p>Front-end developer ...</p>
    <p>GitHub</p>
    <p>Frontend Mentor</p>
    <p>LinkedIn</p>
    <p>Twitter</p>
    <p>Instagram</p>
</div> */}
