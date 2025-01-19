import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [inputTime, setInputTime] = useState("");
  const [remainingTime, setRemainingTime] = useState(() => {
    const savedTime = localStorage.getItem("remainingTime");
    return savedTime ? parseInt(savedTime, 10) : 0;
  });
  const [isRunning, setIsRunning] = useState(() => {
    const savedState = localStorage.getItem("isRunning");
    return savedState === "true";
  });

  useEffect(() => {
    localStorage.setItem("remainingTime", remainingTime);
    if (remainingTime === 0) {
      setIsRunning(false);
    }
  }, [remainingTime]);

  useEffect(() => {
    localStorage.setItem("isRunning", isRunning);
    let interval;
    if (isRunning && remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, remainingTime]);

  const handleStart = () => {
    if (remainingTime > 0) {
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    const initialTime = parseInt(inputTime, 10);
    if (!isNaN(initialTime) && initialTime > 0) {
      setRemainingTime(initialTime);
      setIsRunning(false);
    }
  };

  const handleInputChange = (e) => {
    setInputTime(e.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Countdown Timer</h1>
      <div>
        <input type="number" value={inputTime} onChange={handleInputChange} placeholder="Enter time in seconds" />
        <button onClick={handleReset}>Set Time</button>
      </div>
      <h2>{remainingTime > 0 ? remainingTime : "Time's up!"}</h2>
      <div>
        <button onClick={handleStart} disabled={isRunning || remainingTime <= 0}>Start</button>
        <button onClick={handleStop} disabled={!isRunning}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default CountdownTimer;
