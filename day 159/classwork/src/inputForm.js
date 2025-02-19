import React from 'react';

function InputForm({ num1, num2, setNum1, setNum2, calculateSum }) {
  return (
    <div className="input-form">
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Enter first number" />
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Enter second number" />
      <button onClick={calculateSum}>Calculate</button>
    </div>
  );
}

export default InputForm;
