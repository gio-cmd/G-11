import React, { useState } from 'react';

function TaskForm({ setTasks }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'low',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prevTasks) => [...prevTasks, { ...formData, id: Date.now(), status: 'pending' }]);
    setFormData({ title: '', description: '', dueDate: '', priority: 'low' }); // Reset form
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Task Title" value={formData.title} onChange={handleChange} required />
      <textarea name="description" placeholder="Task Description" value={formData.description} onChange={handleChange} />
      <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} required />
      <select name="priority" value={formData.priority} onChange={handleChange}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
