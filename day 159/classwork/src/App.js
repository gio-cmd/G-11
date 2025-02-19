import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import './styles.css';

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="app">
      <h1>Task Management Dashboard</h1>
      <Dashboard tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
