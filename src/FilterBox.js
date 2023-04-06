// src/components/FilterBox.js
import React, { useState } from 'react';

function FilterBox({ setFilter }) {
  const [searchText, setSearchText] = useState('');

  const handleFilterChange = (e) => {
    setSearchText(e.target.value);
    setFilter(e.target.value);
  };

  return (
    <input
      type="text"
      value={searchText}
      onChange={handleFilterChange}
      placeholder="Search..."
    />
  );
}

export default FilterBox;
