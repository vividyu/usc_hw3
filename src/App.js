// src/App.js
import React, { useState } from 'react';
import TodoList from './TodoList';
import InputBox from './InputBox';
import FilterBox from './FilterBox';
import Tabs from './Tabs';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  return (
    <div className="App">
      {todos.length === 0 ? (
        <>
          <h1>No Todos Here...</h1>
          <InputBox setTodos={setTodos} />
        </>
      ) : (
        <>
          <FilterBox setFilter={setFilter} />
          <Tabs filter={filter} setFilter={setFilter} />
          <TodoList todos={todos} setTodos={setTodos} filter={filter} />
          <InputBox setTodos={setTodos} />
        </>
      )}
    </div>
  );
}

export default App;
