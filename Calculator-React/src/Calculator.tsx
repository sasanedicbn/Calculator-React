import React, { useState } from 'react';

const Calculator = () => {
    const [firstOutput, setFirstOutput] = useState("0");
    const [secondOutput, setSecondOutput] = useState('');
    const [operation, setOperation] = useState('');

    function OutputNumbers(event) {
        const number = event.target.textContent;
        if (operation !== '') {
            // setSecondOutput((prevOutput) => prevOutput + number);
        } else {
            if (firstOutput === '0') {
                setFirstOutput(number);
            } else {
                setFirstOutput((prevOutput) => prevOutput + number);
            }
        }
    }

    function OutputOperation(event) {
        const selectedOperation = event.target.textContent;
        if (!firstOutput) {
            return; 
        } else {
            setOperation(selectedOperation);
            setFirstOutput((prevOutput) => prevOutput + selectedOperation); 
        }
    }

    return (
        <div className="container">
            <div className="calculator">
                <div className="output-secondary">{secondOutput}</div>
                <div className="output-first">{firstOutput}</div>
            </div>
            <div className="buttons">
                <button className="btn btn-clear">CLEAR</button>
                <button className="btn btn-delete">DELETE</button>
                <button className="btn btn-number" onClick={OutputNumbers}>7</button>
                <button className="btn btn-number" onClick={OutputNumbers}>8</button>
                <button className="btn btn-number" onClick={OutputNumbers}>9</button>
                <button className="btn btn-operation" onClick={OutputOperation}>/</button>

                <button className="btn btn-number" onClick={OutputNumbers}>4</button>
                <button className="btn btn-number" onClick={OutputNumbers}>5</button>
                <button className="btn btn-number" onClick={OutputNumbers}>6</button>
                <button className="btn btn-operation" onClick={OutputOperation}>*</button>

                <button className="btn btn-number" onClick={OutputNumbers}>1</button>
                <button className="btn btn-number" onClick={OutputNumbers}>2</button>
                <button className="btn btn-number" onClick={OutputNumbers}>3</button>
                <button className="btn btn-operation" onClick={OutputOperation}>-</button>

                <button className="btn btn-dot">.</button>
                <button className="btn btn-number" onClick={OutputNumbers}>0</button>
                <button className="btn btn-operation-equal">=</button>
                <button className="btn btn-operation" onClick={OutputOperation}>+</button>
            </div>
        </div>
    );
};

export default Calculator;
