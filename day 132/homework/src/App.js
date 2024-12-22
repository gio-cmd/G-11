import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  return (
    <main>
      <h1>Counter</h1>
      <p>value: {count}</p>
      <button onClick={add}>raise</button>
    </main>
  );
}

export default App;
