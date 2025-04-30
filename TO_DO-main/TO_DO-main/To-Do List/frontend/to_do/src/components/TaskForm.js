import React, { useState, useEffect } from 'react';
import { createTask, updateTask } from '../services/TaskService';

const TaskForm = ({ taskToEdit, onSave }) => {
  const [task, setTask] = useState({
    assignedTo: '',
    status: 'Pending',
    priority: 'Medium',
    dueDate: '',
    comments: '',
  });

  useEffect(() => {
    if (taskToEdit) setTask(taskToEdit);
  }, [taskToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task._id) await updateTask(task._id, task);
    else await createTask(task);
    onSave();
    setTask({ assignedTo: '', status: 'Pending', priority: 'Medium', dueDate: '', comments: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{task._id ? 'Edit Task' : 'Add Task'}</h2>
      <input name="assignedTo" value={task.assignedTo} onChange={handleChange} placeholder="Assigned To" required />
      <select name="status" value={task.status} onChange={handleChange}>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <select name="priority" value={task.priority} onChange={handleChange}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required />
      <textarea name="comments" value={task.comments} onChange={handleChange} placeholder="Comments" />
      <button type="submit">Save</button>
    </form>
  );
};

export default TaskForm;