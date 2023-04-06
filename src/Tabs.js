// src/components/Tabs.js
import React from 'react';

function Tabs({ filter, setFilter }) {
  const handleClick = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div>
      <button
        onClick={() => handleClick('All')}
        style={filter === 'All' ? { color: 'red' } : {}}
      >
        All
      </button>
      <button
        onClick={() => handleClick('Processing')}
        style={filter === 'Processing' ? { color: 'red' } : {}}
      >
        Processing
      </button>
      <button
        onClick={() => handleClick('Done')}
        style={filter === 'Done' ? { color: 'red' } : {}}
      >
        Done
      </button>
    </div>
  );
}

export default Tabs;
