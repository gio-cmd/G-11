import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, setTasks }) {
  return (
    <div className="task-list">
      <h2>Your Tasks</h2>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} setTasks={setTasks} />
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
}

export default TaskList;
