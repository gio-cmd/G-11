import React, { useState, useEffect } from 'react';

const TaskManager = () => {
  const [taskList, setTaskList] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');
  const [taskCategory, setTaskCategory] = useState('Work');
  const [categoryFilter, setCategoryFilter] = useState('All');

  useEffect(() => {
    const savedTaskList = JSON.parse(localStorage.getItem('taskList'));
    if (savedTaskList) {
      setTaskList(savedTaskList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }, [taskList]);

  const addNewTask = () => {
    if (newTaskName.trim() !== '') {
      const taskItem = {
        id: Date.now(),
        name: newTaskName,
        category: taskCategory,
        completed: false,
      };
      setTaskList([...taskList, taskItem]);
      setNewTaskName('');
    }
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTaskList = taskList.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTaskList(updatedTaskList);
  };

  const removeTask = (taskId) => {
    const updatedTaskList = taskList.filter(task => task.id !== taskId);
    setTaskList(updatedTaskList);
  };

  const filteredTaskList = taskList.filter(task => 
    categoryFilter === 'All' || task.category === categoryFilter
  );

  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        <input 
          type="text" 
          placeholder="Task Name" 
          value={newTaskName} 
          onChange={(e) => setNewTaskName(e.target.value)} 
        />
        <select value={taskCategory} onChange={(e) => setTaskCategory(e.target.value)}>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Study">Study</option>
        </select>
        <button onClick={addNewTask}>Add Task</button>
      </div>
      <div>
        <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Study">Study</option>
        </select>
      </div>
      <ul>
        {filteredTaskList.map(task => (
          <li key={task.id}>
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => toggleTaskCompletion(task.id)} 
            />
            {task.name} - {task.category}
            <button onClick={() => removeTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
