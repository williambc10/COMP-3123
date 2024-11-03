const express = require('express');
const app = express();
const SERVER_PORT = 8081

app.get('/hello', (req, res) => {
    res.send('Hello Express JS.');
})

//http://localhost:3000/user?fnm=William&lnm=Cham
app.get('/user', (req, res) => {
    console.log(req.query)
    const firstname = req.query.firstname || 'Pritesh';
    const lastname = req.query.lastname || 'Patel';
    res.send(`First Name: ${firstname}, Last Name: ${lastname}`);
});

//http://localhost:3000/user/William/Cham
app.post('/user/:firstname/:lastname', (req, res) => {
    res.status(201)
    console.log(req.query)
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;
    res.send(`First Name: ${firstname}, Last Name: ${lastname}`);
});

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});