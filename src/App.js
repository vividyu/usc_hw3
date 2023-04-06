// src/App.js
import React, { useState } from 'react';
import TodoList from './TodoList';
import InputBox from './InputBox';
import FilterBox from './FilterBox';
import Tabs from './Tabs';

function App() {
  const [todos, setTodos] = useState([]);
  const [tabFilter, setTabFilter] = useState('All');
  const [searchFilter, setSearchFilter] = useState('');

  return (
    <div className="App">
      {todos.length === 0 ? (
        <>
          <h1>No Todos Here...</h1>
          <InputBox setTodos={setTodos} />
        </>
      ) : (
        <>
          <FilterBox setFilter={setSearchFilter} />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            tabFilter={tabFilter}
            searchFilter={searchFilter}
          />
          <Tabs filter={tabFilter} setFilter={setTabFilter} />
          <InputBox setTodos={setTodos} />
        </>
      )}
    </div>
  );
}

export default App;
