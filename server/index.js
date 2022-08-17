const express = require('express');
const mongoose = require('mongoose');

var app = express();
const PORT = 3001;

mongoose.connect('mongodb://localhost:27017/app');
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB connection established successfully");
})

console.log('Server hosted on port ' + PORT);
app.listen(PORT);

app.use(express.static('../client/build'));

app.get('/api', (req, res) => {
    res.status(200).send({
        joe: 'close enough time'
    });
});