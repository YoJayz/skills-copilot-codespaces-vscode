// Create web server
// Create a new server with express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// Use the body-parser middleware to parse the body of the request
app.use(bodyParser.json());
// Create a variable to store the comments
let comments = [];
// Create a new route to get all the comments
app.get('/comments', (req, res) => {
  res.json(comments);
});
// Create a new route to post a comment
app.post('/comments', (req, res) => {
  // Get the comment from the request body
  const comment = req.body;
  // Add the comment to the comments array
  comments.push(comment);
  // Send a response with the comment that was added
  res.json(comment);
});
// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});