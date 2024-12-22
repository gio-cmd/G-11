import React from 'react';

const NameList = (props) => {
  const { names } = props;
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
};

export default NameList;


// props are arguments passed to react components and they enable us to give information about parent component