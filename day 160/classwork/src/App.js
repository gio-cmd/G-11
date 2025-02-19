
import React from "react";
import "./App.css";

function App() {
  const buttonStyle = {
    backgroundColor: "blue",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "50px" }}>
      <button style={{ backgroundColor: "green", color: "white", padding: "10px 20px", borderRadius: "5px", border: "none", cursor: "pointer",}}>
          click me inlin
      </button>

      <button style={buttonStyle}>click me objc</button>

      <button className="css-styled-button">click me css</button>
    </div>
  );
}

export default App;
