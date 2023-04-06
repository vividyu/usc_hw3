// src/components/FilterBox.js
import React from 'react';

function FilterBox({ setFilter }) {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <select onChange={handleFilterChange}>
      <option value="All">All</option>
      <option value="Processing">Processing</option>
      <option value="Done">Done</option>
    </select>
  );
}

export default FilterBox;
