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
        className={filter === 'All' ? 'active' : ''}
      >
        All
      </button>
      <button
        onClick={() => handleClick('Processing')}
        className={filter === 'Processing' ? 'active' : ''}
      >
        Processing
      </button>
      <button
        onClick={() => handleClick('Done')}
        className={filter === 'Done' ? 'active' : ''}
      >
        Done
      </button>
    </div>
  );
}

export default Tabs;
