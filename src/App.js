import React, { useState } from 'react';
import './App.scss';

function App() {
  const [displayValue, setDisplayValue] = useState('');
  const [result, setResult] = useState('');

  const handleNumberClick = (number) => {
    if (displayValue.length < 9 && parseInt(displayValue + number) <= 999999999) {
      setDisplayValue(displayValue + number);
    }
  };

  const handleOperatorClick = (operator) => {
    if (operator === '+/-') {
      setDisplayValue(-parseFloat(displayValue));
    } else {
      setResult(`${displayValue} ${operator}`);
      setDisplayValue('');
    }
  };

  const handleEqualsClick = () => {
    let calculatedResult;
    if (result.includes('+')) {
      calculatedResult = parseFloat(result) + parseFloat(displayValue);
    } else if (result.includes('-')) {
      calculatedResult = parseFloat(result) - parseFloat(displayValue);
    } else if (result.includes('*')) {
      calculatedResult = parseFloat(result) * parseFloat(displayValue);
    }

    if (calculatedResult > 999999999 || calculatedResult < -999999999) {
      setDisplayValue('ERROR***');
    } else {
      setDisplayValue(calculatedResult.toString());
    }
    setResult('');
  };

  const handleClearClick = () => {
    setDisplayValue('');
    setResult('');
  };

  return (
    <div className="Pantalla">
      <div className="titulo">
        <h1>Calculadora Básica</h1>
      </div>
      <div className={`calculator ${displayValue === 'ERROR***' ? 'error' : ''}`}>
        <div className="display">{displayValue}</div>
        <div className="buttons">
          <div className="row">
            <button onClick={() => handleNumberClick('7')}>7</button>
            <button onClick={() => handleNumberClick('8')}>8</button>
            <button onClick={() => handleNumberClick('9')}>9</button>
            <button onClick={() => handleOperatorClick('/')}>/</button>
          </div>
          <div className="row">
            <button onClick={() => handleNumberClick('4')}>4</button>
            <button onClick={() => handleNumberClick('5')}>5</button>
            <button onClick={() => handleNumberClick('6')}>6</button>
            <button onClick={() => handleOperatorClick('*')}>*</button>
          </div>
          <div className="row">
            <button onClick={() => handleNumberClick('1')}>1</button>
            <button onClick={() => handleNumberClick('2')}>2</button>
            <button onClick={() => handleNumberClick('3')}>3</button>
            <button onClick={() => handleOperatorClick('-')}>-</button>
          </div>
          <div className="row">
            <button onClick={() => handleNumberClick('0')}>0</button>
            <button onClick={() => handleOperatorClick('+/-')}>+/-</button>
            <button onClick={handleEqualsClick}>=</button>
            <button onClick={() => handleOperatorClick('+')}>+</button>
          </div>
          <div className="row">
            <button onClick={handleClearClick}>AC</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
