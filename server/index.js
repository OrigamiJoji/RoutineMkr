const express = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const config = require('./config.json');

var app = express();
const PORT = 3001;

mongoose.connect(config.mongodb);
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB connection established successfully");
})
const userSchema = new Schema({
    email: String,
    password: String,
    goals: [{name: String, note: String}],
    tasks: [{name: String, note: String}]
})
const users = mongoose.model('User', userSchema);

console.log('Server hosted on port ' + PORT);
app.listen(PORT);

app.get('/api/login/:mail/:pword', (req, res) => {
    const { mail, pword } = req.params;
    users.findOne({email: mail}).exec().then((f)=> {
        const { email, password } = f;
        if(password === pword) {
            res.status(200).send("logged in");
        }
        else {
            res.status(200).send("not logged in");
        }
        
    });
});
app.post('/api/signup/:email/:password', (req, res) => {
    const { email, password } = req.params;
    users.insertMany({
        email: email, 
        password: password,
        tasks: [],
        goals: []});
    res.status(200);
});