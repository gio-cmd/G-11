import React, { useEffect, useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function Dashboard({ tasks, setTasks }) {
  const [statistics, setStatistics] = useState({ total: 0, completed: 0, overdue: 0 });

  useEffect(() => {
    const total = tasks.length;
    const completed = tasks.filter((task) => task.status === 'completed').length;
    const overdue = tasks.filter(
      (task) => new Date(task.dueDate) < new Date() && task.status !== 'completed'
    ).length;

    setStatistics({ total, completed, overdue });
  }, [tasks]);

  return (
    <div className="dashboard">
      <div className="stats">
        <h2>Task Statistics</h2>
        <p>Total Tasks: {statistics.total}</p>
        <p>Completed Tasks: {statistics.completed}</p>
        <p>Overdue Tasks: {statistics.overdue}</p>
      </div>
      <TaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default Dashboard;
