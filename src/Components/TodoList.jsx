import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';

// TodoList component to display and manage the list of todos
function TodoList({ todos, setTodos }) {
    // State to hold the ID of the todo being edited
    const [editId, setEditId] = useState(null);
    // State to hold the task text while editing
    const [editTask, setEditTask] = useState('');

    // Handle changes to the edit input field
    const handleEditChange = (e) => {
        setEditTask(e.target.value);
    };
    // Handle submission of the edited todo
    //This defines a function named handleEditSubmit which is an asynchronous function (async keyword).
    //takes a single parameter id which represents the ID of the todo item that needs to be updated.
    const handleEditSubmit = async (id) => {
        //This line creates an object updatedTodo that represents the updated version of the todo item.
        const updatedTodo = { id, task: editTask, completed: false };
        try {
            // Send PUT request to update the todo
            //The await keyword is used to wait for the completion of the fetch request.
            await fetch(`http://localhost:5000/todos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedTodo),
            });
            // Update the state with the edited todo
            setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
            setEditId(null);// Clear the edit state
        } catch (error) {
            console.error('Error editing todo', error);
        }
    };
    // Handle deletion of a todo
    const handleDelete = async (id) => {
        try {
            // Send DELETE request to remove the todo
            await fetch(`http://localhost:5000/todos/${id}`, {
                method: 'DELETE',
            });
            // Update the state to remove the deleted todo
            setTodos(todos.filter(todo => todo.id !== id));
        } catch (error) {
            console.error('Error deleting todo', error);
        }
    };

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo) => (
                    <tr key={todo.id}>
                        <td>
                            {editId === todo.id ? (
                                <input
                                    type="text"
                                    value={editTask}
                                    onChange={handleEditChange}
                                    className="form-control"
                                />
                            ) : (
                                todo.task
                            )}
                        </td>
                        <td>
                            {editId === todo.id ? (
                                <button
                                    className="btn btn-success me-2"
                                    onClick={() => handleEditSubmit(todo.id)}
                                >
                                    Save
                                </button>
                            ) : (
                                <>
                                    <button
                                        // className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-3 rounded-full"
                                        onClick={() => {
                                            setEditId(todo.id);
                                            setEditTask(todo.task);
                                        }}
                                    >
                                        <EditIcon />
                                    </button>
                                    <button
                                        // className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded-full"
                                        onClick={() => handleDelete(todo.id)}
                                    >
                                        <DeleteIcon />
                                    </button>
                                </>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TodoList;

