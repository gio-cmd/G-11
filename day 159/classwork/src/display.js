import React from 'react';

function Display({ result }) {
  return (
    <div className="display">
      <h2>Result: {result !== null ? result : 'No math yet'}</h2>
    </div>
  );
}

export default Display;
