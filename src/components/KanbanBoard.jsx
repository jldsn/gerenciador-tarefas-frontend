import React from 'react';
import TaskCard from './TaskCard';

const KanbanBoard = ({ tasks, onUpdateTask, onDeleteTask }) => {
  const pendingTasks = tasks.filter(task => task.status === 'pendente');
  const doingTasks = tasks.filter(task => task.status === 'realizando');
  const doneTasks = tasks.filter(task => task.status === 'concluída');

  return (
    <div className="kanban-board">
      <div className="column">
        <h2>Pendente</h2>
        {pendingTasks.map(task => (
          <TaskCard
            key={task._id}
            task={task}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </div>
      <div className="column">
        <h2>Realizando</h2>
        {doingTasks.map(task => (
          <TaskCard
            key={task._id}
            task={task}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </div>
      <div className="column">
        <h2>Concluída</h2>
        {doneTasks.map(task => (
          <TaskCard
            key={task._id}
            task={task}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
