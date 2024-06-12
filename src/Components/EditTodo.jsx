import React, { useState } from 'react';

function EditTodo({ todoId, initialText, onSaveEdit }) {
    // State to store the edited text
    const [editedText, setEditedText] = useState(initialText);

    // Event handler for input change
    const handleEditChange = (e) => {
        setEditedText(e.target.value);
    };


    // Event handler for Save button click
    const handleSaveClick = async () => {
        // Call the function to update the todo on the server
        try {
            // Send a PUT request to update the todo on the server
            const response = await fetch(`http://localhost:3001/api/todos/${todoId}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: editedText }),
            });

            if (response.ok) {
                // Call the onSaveEdit function to update the todo in the frontend
                onSaveEdit(todoId, editedText);
            } else {
                console.error('Error updating todo:', response.statusText);
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };

    return (
        <div>
            <input type="text" value={editedText} onChange={handleEditChange} />
            <button onClick={handleSaveClick}>Save</button>
        </div>
    );
}

export default EditTodo;
