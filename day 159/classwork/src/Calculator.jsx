import React, { useState } from 'react';
import InputForm from './InputForm';
import Display from './Display';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(null);

  const calculateSum = () => {
    const total = parseFloat(num1) + parseFloat(num2);
    setSum(total);
  };

  return (
    <div className="calculator">
      <InputForm num1={num1} num2={num2} setNum1={setNum1} setNum2={setNum2} calculateSum={calculateSum} />
      <Display result={sum} />
    </div>
  );
}

export default Calculator;
