// src/components/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, setTodos, tabFilter, searchFilter }) {
  const filteredTodos = todos.filter((todo) => {
    if (tabFilter === 'All') return true;
    if (tabFilter === 'Processing') return !todo.done;
    if (tabFilter === 'Done') return todo.done;
    return false;
  }).filter((todo) => {
    return todo.text.toLowerCase().includes(searchFilter.toLowerCase());
  });

  const sortedTodos = filteredTodos.sort((a, b) => a.priority - b.priority);

  return (
    <ul>
      {sortedTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </ul>
  );
}

export default TodoList;
