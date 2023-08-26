// Importing the Express framework to create a web server.
const express = require('express');

// Creating a new Express application instance.
const app = express();

// Setting the port number for the application to listen on.
const port = 3000;

// Setting up a route handler for GET requests to the root ('/') path.
// When a user visits the root path, they will receive the message "Hello World!".
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Telling the application to start listening for incoming requests on the specified port.
// A callback function is provided to log a message when the server starts successfully.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
