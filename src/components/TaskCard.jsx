import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const TaskCard = ({ task, onUpdateTask, onDeleteTask }) => {
  const handleStatusChange = (e) => {
    onUpdateTask(task._id, { ...task, status: e.target.value });
  };

  return (
    <div className="task-card">
      <h3>{task.titulo}</h3>
      <p>{task.descricao}</p>
      <p>Prioridade: {task.prioridade}</p>
      <select value={task.status} onChange={handleStatusChange}>
        <option value="pendente">Pendente</option>
        <option value="realizando">Realizando</option>
        <option value="concluída">Concluída</option>
      </select>
      <button onClick={() => onUpdateTask(task._id, task)}>
        <FaEdit /> Editar
      </button>
      <button onClick={() => onDeleteTask(task._id)}>
        <FaTrash /> Excluir
      </button>
    </div>
  );
};

export default TaskCard;
