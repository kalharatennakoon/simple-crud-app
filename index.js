const express = require('express');
const mongoose = require('mongoose');

const app = express();

// app.listen(3000, () => {
//     console.log("Server is listening on port 3000");
// });

app.get("/", (req, res) => {
    res.send("Hello from Node Server");
});

mongoose.connect("") // mongodb connection URL
.then(() =>{
    console.log("Connected to database!");
    app.listen(3000, () => {
        console.log("Server is listening on port 3000");
    });
})
.catch(() => {
    console.log("Connection failed!");
});