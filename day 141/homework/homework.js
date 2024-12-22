import React, { useState, useEffect } from 'react';

function App() {
  const [loadingMessage, setLoadingMessage] = useState("loading...");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [windowMessage, setWindowMessage] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingMessage(prev => prev === "loading..." ? "loading" : "loading...");
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const changeBgColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBgColor(randomColor);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < window.innerHeight) {
        setWindowMessage("The window is vertical");
      } else {
        setWindowMessage("The window is horizontal");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <h1>{loadingMessage}</h1>
      <button onClick={changeBgColor}>Change Background Color</button>
      <p>{windowMessage}</p>
    </div>
  );
}

export default App;
