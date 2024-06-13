import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';


const TodoList = ({ todos, setTodos }) => {
    const [editId, setEditId] = useState(null);
    const [editTask, setEditTask] = useState('');

    const handleEditChange = (e) => {
        setEditTask(e.target.value);
    };

    const handleEditSubmit = async (id) => {
        const updatedTodo = { id, task: editTask, completed: false };
        try {
            await fetch(`http://localhost:5000/todos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedTodo),
            });
            setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
            setEditId(null);
        } catch (error) {
            console.error('Error editing todo', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:5000/todos/${id}`, {
                method: 'DELETE',
            });
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

