const express = require('express');
const mongoose = require('mongoose');

var app = express();
const port = 3001;

app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/app');
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB connection established successfully");
})

console.log('Server hosted on port ' + port);
app.listen(port);

app.get('/', (req, res) => {
    res.send('hello');
})
