import React, { useState } from 'react'
// import AddCircleIcon from '@material-ui/icons/AddCircle';

const TodoForm = ({ addTodo }) => {
    const [task, setTask] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (task.trim()) {
            const newTodo = {
                id: Date.now(),
                task,
                completed: false,
            };
            try {
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



