import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleInput = (value) => {
    setInput((prev) => prev + value);
    setError('');
  };

  const calculateResult = () => {
    try {
      const evalResult = eval(input);
      if (!isFinite(evalResult)) {
        throw new Error('Result is not a number.');
      }
      setResult(evalResult);
    } catch (err) {
      setError('wrong');
    }
  };

  const clearScreen = () => {
    setInput('');
    setResult(null);
    setError('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>React Calculator</h1>
      <div style={{ marginBottom: '10px' }}>
        <input type="text"value={input} readOnly style={{ width: '300px', height: '40px', fontSize: '20px', textAlign: 'right' }}/>
        <div>
          <span style={{ fontSize: '20px' }}>
            {error ? <span style={{ color: 'red' }}>{error}</span> : result !== null ? `= ${result}` : ''}
          </span>
        </div>
      </div>
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button key={num} onClick={() => handleInput(num.toString())} style={{ width: '50px', height: '50px', margin: '5px', fontSize: '20px' }}>
            {num}
          </button>
        ))}
        {['+', '-', '*', '/'].map((op) => (
          <button key={op} onClick={() => handleInput(op)} style={{ width: '50px', height: '50px', margin: '5px', fontSize: '20px' }}>
            {op}
          </button>
        ))}
        {['(', ')'].map((paren) => (
          <button key={paren} onClick={() => handleInput(paren)} style={{ width: '50px', height: '50px', margin: '5px', fontSize: '20px' }}>
            {paren}
          </button>
        ))}
      </div>
      <div style={{ marginTop: '10px' }}>
        <button
          onClick={clearScreen}
          style={{ width: '110px', height: '50px', margin: '5px',  backgroundColor: '#f44336', color: 'white', fontSize: '20px', }}>
          Clear
        </button>
        <button
          onClick={calculateResult}
          style={{ width: '110px', height: '50px',  margin: '5px', backgroundColor: '#4caf50', color: 'white', fontSize: '20px',}}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
