import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  return (
    <div className="app-container">
      <p>Count: {count}</p>
      <button onClick={plus}>Increment</button>
    </div>
  );
};

export default App;
