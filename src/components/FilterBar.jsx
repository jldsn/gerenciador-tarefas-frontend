import React from 'react';

const FilterBar = ({ onFilter }) => {
  return (
    <div className="filter-bar">
      <select onChange={(e) => onFilter(e.target.value)}>
        <option value="">Todas</option>
        <option value="baixa">Baixa</option>
        <option value="média">Média</option>
        <option value="alta">Alta</option>
      </select>
    </div>
  );
};

export default FilterBar;
