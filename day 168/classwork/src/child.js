import React, { useContext } from "react";
import { InnerContext } from "../context/InnerContext";

const ChildComponent = () => {
  const innerValue = useContext(InnerContext);

  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h3>Child Component</h3>
      <p><strong>val from inside:</strong> {innerValue}</p>
    </div>
  );
};

export default ChildComponent;
