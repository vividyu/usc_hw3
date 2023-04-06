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

  const toggleDone = () => {
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, done: !t.done } : t
      )
    );
  };

  const editTodo = () => {
    if (!todo.done) {
      setIsEditing(true);
    }
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
      <span
        onClick={toggleDone}
        style={todo.done ? { textDecoration: 'line-through' } : {}}
      >
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        ) : (
          todo.text
        )}
      </span>
      {isEditing ? (
        <>
          <button onClick={cancelEdit}>Cancel</button>
          <button onClick={saveTodo}>Save</button>
        </>
      ) : (
        <>
          <button onClick={editTodo} disabled={todo.done}>
            Edit
          </button>
          <button onClick={deleteTodo}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
