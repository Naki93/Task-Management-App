// TodoList.js
import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import EditTodo from './EditTodo';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [editingTodoId, setEditingTodoId] = useState(null);

    // Fetch todos when component mounts
    useEffect(() => {
        fetchTodos();
    }, []);

    // Fetch todos from the backend
    const fetchTodos = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/todos', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();

                setTodos(data.todos);

            } else {
                console.error('Error fetching todos:', response.statusText);
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };
    // // Handle adding a new todo
    // const handleAddTodo = async (todoText) => {
    //     try {
    //         const response = await fetch('http://localhost:3001/api/todos', {
    //             method: 'POST',
    //             headers: {
    //                 'Authorization': `Bearer ${localStorage.getItem('token')}`,
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ text: todoText }),
    //         });

    //         if (response.ok) {
    //             // Fetch updated todos from the backend
    //             fetchTodos();
    //         } else {
    //             console.error('Error adding todo:', response.statusText);
    //         }
    //     } catch (error) {
    //         console.error('Network error:', error);
    //     }
    // };


    // Handle saving an edited todo
    const handleSaveEdit = (todoId, editedText) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === todoId ? { ...todo, text: editedText } : todo
        );
        setTodos(updatedTodos);
        setEditingTodoId(null);
    };
    // Handle deleting a todo
    const handleDeleteClick = async (todoId) => {
        try {
            const response = await fetch(`http://localhost:3001/api/todos/${todoId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                // Fetch updated todos from the backend
                fetchTodos();
            } else {
                console.error('Error deleting todo:', response.statusText);
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };
    // Handle marking a todo as read
    const handleMarkAsRead = async (todoId) => {
        try {
            const response = await fetch(`http://localhost:3001/api/todos/${todoId}/mark-as-read`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ isRead: true }),
            });

            if (response.ok) {
                // Fetch updated todos from the backend
                console.log('Todo marked as read successfully:', todoId);
                fetchTodos();
            } else {
                console.error('Error marking todo as read:', response.statusText);
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };


    return (
        <div>
            <h2>Todo List</h2>

            {/* Map through todos and render each one */}
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {editingTodoId === todo.id ? (
                            <EditTodo
                                todoId={todo.id}
                                initialText={todo.text}
                                onSaveEdit={handleSaveEdit}
                            />
                        ) : (
                            <>
                                <input
                                    type="checkbox"
                                    checked={todo.isRead}
                                    onChange={() => handleMarkAsRead(todo.id)}
                                />
                                {todo.text}
                                <button onClick={() => setEditingTodoId(todo.id)}>Edit</button>
                                <button onClick={() => handleDeleteClick(todo.id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
