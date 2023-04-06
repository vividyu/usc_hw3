// src/components/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, setTodos, filter }) {
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'All') return true;
    if (filter === 'Processing') return !todo.done;
    if (filter === 'Done') return todo.done;
    return false;
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
