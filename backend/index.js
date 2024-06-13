const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

//Create an empty array to store all my data (This is will act as a storage since I have no database)
let todos = [];

// Endpoint to fetch all todos
//app.get is a method provided by the Express.js framework to define how the server should respond to GET 
//Create a a callback function that gets executed when a GET request is received at the /todos endpoint.
app.get('/todos', (request, response) => {
  response.json(todos);
});

// Endpoint to add a new todo
//app.post is a method provided by the Express.js framework to define how the server should respond to POST
//Create a a callback function that gets executed when a POST request is received at the /todos endpoint.
app.post('/todos', (req, res) => {
  const todo = req.body;
  todos.push(todo);
  res.status(201).json(todo);
});

//This route expects a PUT request to /todos/:id, where :id is the ID of the todo to be updated.
app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const updatedTodo = req.body;
  // Update the todo with matching ID in the `todos` array
  todos = todos.map(todo => {
    if (todo.id === parseInt(id)) {
      return updatedTodo;
    } else {
      return todo;
    }
  });
  res.json(updatedTodo);
});

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;

  // Find the index of the todo with matching ID in the `todos` array
  const index = todos.findIndex(todo => todo.id === parseInt(id));

  // Check if the todo with the given ID exists
  if (index !== -1) {
    // Remove the todo at the found index from the `todos` array
    todos.splice(index, 1);

    // Respond with a success status (204 No Content)
    res.status(204).send();
  } else {
    // Respond with a not found status (404 Not Found) if todo with given ID does not exist
    res.status(404).json({ error: 'Todo not found' });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
