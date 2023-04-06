// src/components/InputBox.js
import React, { useState } from 'react';

function InputBox({ setTodos }) {
  const [inputText, setInputText] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputText.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputText,
        priority: 1,
        done: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInputText('');
    }
  };

  return (
    <input
      type="text"
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      onKeyPress={handleKeyPress}
      placeholder="Add a new todo..."
    />
  );
}

export default InputBox;
