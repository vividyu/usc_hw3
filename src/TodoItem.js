// src/components/TodoItem.js
import React, { useState } from 'react';

function TodoItem({ todo, todos, setTodos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const deleteTodo = () => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const updatePriority = (e) => {
    const newPriority = parseInt(e.target.value, 10);
    setTodos(
      todos.map((t) => (t.id === todo.id ? { ...t, priority: newPriority } : t))
    );
  };

  const editTodo = () => {
    setIsEditing(true);
  };

  const saveTodo = () => {
    setTodos(
      todos.map((t) => (t.id === todo.id ? { ...t, text: editedText } : t))
    );
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditedText(todo.text);
  };

  return (
    <li>
      <input
        type="number"
        value={todo.priority}
        onChange={updatePriority}
        min="1"
      />
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span>{todo.text}</span>
      )}
      {isEditing ? (
        <>
          <button onClick={cancelEdit}>Cancel</button>
          <button onClick={saveTodo}>Save</button>
        </>
      ) : (
        <>
          <button onClick={editTodo}>Edit</button>
          <button onClick={deleteTodo}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
