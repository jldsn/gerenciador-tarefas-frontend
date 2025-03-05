import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gerenciador-tarefas-jv2w.onrender.com/tarefas',
});

export const getTasks = async () => {
  const response = await api.get('/');
  return response.data;
};

export const addTask = async (task) => {
  const response = await api.post('/', task);
  return response.data;
};

export const updateTask = async (id, task) => {
  const response = await api.put(`/${id}`, task);
  return response.data;
};

export const deleteTask = async (id) => {
  await api.delete(`/${id}`);
};
