import React, { useState } from 'react'


function TodoForm({ addTodo }) {
    // State to keep track of the new task input by the user
    const [task, setTask] = useState('');
    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();// Prevents the default form submission behavior

        // Check if the input task is not empty
        if (task.trim()) {
            // Create a new todo object
            const newTodo = {
                id: Date.now(),// Generate a unique ID based on the current timestamp
                task,// The task text input by the user
                completed: false,// Initially set the completed status to false
            };
            try {
                // Send a POST request to add the new todo to the backend server
                const response = await fetch('http://localhost:5000/todos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newTodo),
                });
                const createdTodo = await response.json();
                addTodo(createdTodo);
                setTask('');
            } catch (error) {
                console.error('Error adding todo', error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="d-flex mb-4">
            <input
                type="text"
                className="form-control me-2"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a new task"
            />
            <button type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full">

                Add
            </button>
        </form>
    );
};

export default TodoForm;



