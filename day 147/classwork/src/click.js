import React, { useState } from 'react';

const EventHandlersDemo = () => {
  const [text, setText] = useState('original');

  const handleClick = () => {
    setText('Text updated');
  };

  const handleCorrect = () => {
    setText((prevText) => {
      console.log('Previous text:', prevText);
      return 'text updated';
    });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Event Handlers Example</h1>
      <p>{text}</p>
      <div>
        <button onClick={handleClick} style={{ marginRight: '10px' }}>
          Update Text Directly
        </button>
        <button onClick={handleCorrect}>
          Update Text with Callback
        </button>
      </div>
    </div>
  );
};

export default EventHandlersDemo;
