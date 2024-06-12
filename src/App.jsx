import React, { useState } from 'react';

import TodoList from './Components/TodoList';
import EditTodo from './Components/EditTodo';
import Header from './Components/Header';
import TodoForm from './Components/TodoForm'



function App() {

  // Handle adding a new todo
  const handleAddTodo = async (todoText) => {
    try {
      const response = await fetch('http://localhost:3001/api/todos', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: todoText }),
      });

      if (response.ok) {
        // Fetch updated todos from the backend
        fetchTodos();
      } else {
        console.error('Error adding todo:', response.statusText);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div>
      <Header />
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList />
    </div>
  )
}

export default App

