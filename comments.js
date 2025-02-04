// Create web server
// Run: node comments.js
// Test: curl -X POST -d "message=Hello" http://localhost:3000/comments
// Test: curl http://localhost:3000/comments
// Test: curl -X DELETE http://localhost:3000/comments/0
// Test: curl -X PUT -d "message=Hi" http://localhost:3000/comments/0

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const comments = [];

app.post('/comments', (req, res) => {
    const message = req.body.message;
    comments.push(message);
    res.send('Your comment has been added');
});

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.delete('/comments/:index', (req, res) => {
    const index = req.params.index;
    comments.splice(index, 1);
    res.send('Your comment has been deleted');
});

app.put('/comments/:index', (req, res) => {
    const index = req.params.index;
    const message = req.body.message;
    comments[index] = message;
    res.send('Your comment has been updated');
});

app.listen(3000, () => {
    console.log('Server has started');
});
