const API_URL = 'http://localhost:5000/api';

export const getTasks = async () => fetch(`${API_URL}/tasks`).then(res => res.json());
export const createTask = async (task) => fetch(`${API_URL}/task`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(task),
}).then(res => res.json());
export const updateTask = async (id, task) => fetch(`${API_URL}/task/${id}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(task),
}).then(res => res.json());
export const deleteTask = async (id) => fetch(`${API_URL}/task/${id}`, { method: 'DELETE' });