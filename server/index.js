const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const config = require("./config.json");

var app = express();
const PORT = 3001;

mongoose.connect(config.mongodb);
const connection = mongoose.connection;
connection.once("open", function () {
    console.log("MongoDB connection established successfully");
});
const userSchema = new Schema({
    email: String,
    password: String,
    goals: [{ name: String, note: String }],
    tasks: [{ name: String, note: String }],
});
const users = mongoose.model("User", userSchema);

console.log("Server hosted on port " + PORT);
app.use(express.json());
app.listen(PORT);

app.post("/api/signup", (req, res) => {
    const { mail, pword } = req.body;
    users
        .findOne({ email: mail })
        .exec()
        .then((f) => {
            if (f) {
                res.status(403).send("account already exists");
            } else {
                users.create({ email: mail, password: pword });
                res.status(201).send("account created");
            }
        });
});

app.post("/api/login", (req, res) => {
    const { mail, pword } = req.body;
    users
        .findOne({ email: mail })
        .exec()
        .then((f) => {
            if (f) {
                const { password } = f;
                if (password === pword) {
                    res.status(200).send("logged in");
                } else {
                    res.status(401).send("incorrect email or password");
                }
            } else {
                res.status(401).send("incorrect email or password");
            }
        });
});
