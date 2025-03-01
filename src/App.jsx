import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getTasks, addTask, updateTask, deleteTask } from './services/api';
import KanbanBoard from './components/KanbanBoard';
import TaskForm from './components/TaskForm';
import FilterBar from './components/FilterBar';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      toast.error('Erro ao carregar tarefas');
    }
  };

  const handleAddTask = async (task) => {
    try {
      const newTask = await addTask(task);
      setTasks([...tasks, newTask]);
      toast.success('Tarefa adicionada com sucesso');
    } catch (error) {
      toast.error('Erro ao adicionar tarefa');
    }
  };

  const handleUpdateTask = async (id, updatedTask) => {
    try {
      const data = await updateTask(id, updatedTask);
      setTasks(tasks.map(task => (task._id === id ? data : task)));
      toast.success('Tarefa atualizada com sucesso');
    } catch (error) {
      toast.error('Erro ao atualizar tarefa');
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter(task => task._id !== id));
      toast.success('Tarefa excluída com sucesso');
    } catch (error) {
      toast.error('Erro ao excluir tarefa');
    }
  };

  const filteredTasks = filter ? tasks.filter(task => task.prioridade === filter) : tasks;

  return (
    <div className="app">
      <h1>Kanban Board</h1>
      <FilterBar onFilter={setFilter} />
      <TaskForm onSubmit={handleAddTask} />
      <KanbanBoard
        tasks={filteredTasks}
        onUpdateTask={handleUpdateTask}
        onDeleteTask={handleDeleteTask}
      />
      <ToastContainer />
    </div>
  );
};

export default App;
