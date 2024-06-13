import React, { useState, useEffect } from 'react';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import Header from './Components/Header'

function App() {
  // State to hold our list of tasks
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('http://localhost:5000/todos');
        if (!response.ok) {
          throw new Error('Failed to fetch todos');
        }
        const data = await response.json();
        setTodos(data);
        localStorage.setItem('todos', JSON.stringify(data));
      } catch (error) {
        console.error('Error fetching todos', error);
        // If fetch fails, fallback to todos from localStorage
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
      }
    };

    fetchTodos(); // Initial fetch of todos
  }, []);

  // Effect to update localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Function to add a new task to our list
  const addTodo = (newTodo) => {
    //todos is the current state array containing the list of todo items.
    //The syntax [...] is the spread operator, it will create a new array by copying all elements of the todos array.
    //newTodo is the new task object that will be added to the list.
    setTodos([...todos, newTodo]);
  };


  return (
    <div>
      <Header />
      <div className="container ">

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-5 shadow-lg shadow-indigo-500/50">
              {/* <Header /> */}
              <div className="card-body">
                <h3 className="card-title text-center">Todo List</h3>
                <TodoForm addTodo={addTodo} />
                <TodoList todos={todos} setTodos={setTodos} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;


