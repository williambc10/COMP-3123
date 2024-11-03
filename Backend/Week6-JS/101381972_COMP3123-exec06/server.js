const express = require('express');
const bodyParser = require('body-parser');
const noteRoutes = require("./routes/NoteRoutes");
const mongoose = require('mongoose');

const DB_URL = "mongodb+srv://101381972:Cluster01%2F10%2F2001@cluster0.5vn99.mongodb.net/COMP3123_Lab6?retryWrites=true&w=majority&appName=Cluster0"
const app = express();

const SERVER_PORT = 8001

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/api/v1", noteRoutes)

mongoose.Promise = global.Promise;

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.route('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});


app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})