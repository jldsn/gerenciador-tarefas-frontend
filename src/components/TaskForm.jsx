import React, { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    status: 'pendente',
    prioridade: 'baixa',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ titulo: '', descricao: '', status: 'pendente', prioridade: 'baixa' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={formData.titulo}
        onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
        required
      />
      <textarea
        placeholder="Descrição"
        value={formData.descricao}
        onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
      />
      <select
        value={formData.status}
        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
      >
        <option value="pendente">Pendente</option>
        <option value="realizando">Realizando</option>
        <option value="concluída">Concluída</option>
      </select>
      <select
        value={formData.prioridade}
        onChange={(e) => setFormData({ ...formData, prioridade: e.target.value })}
      >
        <option value="baixa">Baixa</option>
        <option value="média">Média</option>
        <option value="alta">Alta</option>
      </select>
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
};

export default TaskForm;
