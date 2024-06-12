import React, { useState } from 'react'

function TodoForm({ onAddTodo }) {
    const [todoText, setTodoText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoText.trim() !== '') {
            // Call the onAddTodo function passed from the parent component
            onAddTodo(todoText);
            setTodoText(''); // Clear the input field
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="todoText" className="form-label">
                    Add New Todo:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="todoText"
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Add Todo
            </button>
        </form>
    );
};


export default TodoForm
