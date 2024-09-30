/*const express = require('express');
const app = express();
const SERVER_PORT = 3000

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About us</h1>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Contact us</h1>');
});

app.post('/hello', (req, res) => {     //Browser only allows GET method, Postman will allow POST & GET
    res.send('<h1>POST - Hello World</h1>');
});

app.put('/hello', (req, res) => {     //Browser only allows GET method, Postman will allow PUT
    res.send('<h1>PUT - Hello World</h1>');
});

app.delete('/hello', (req, res) => {     //Browser only allows GET method, Postman will allow DELETE
    res.send('<h1>DELETE - Hello World</h1>');
});

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:3000`)
})*/

const express = require('express');
const app = express();
const SERVER_PORT = 3000

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About US</h1>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Contact Us</h1>');
});

app.get('/hello', (req, res) => {
    res.status(200)
    res.send('<h1>GET - Hello World</h1>');
})

app.post('/hello', (req, res) => {
    res.status(201)
        .send('<h1>POST - Hello World</h1>');
})

// app.all('/hello', (req, res) => {
//     res.status(200)
//     res.send('<h1>ALL - Hello World</h1>');
// })

app.put('/hello', (req, res) => {
    res.status(203)
    res.send('<h1>PUT - Hello World</h1>');
})

app.delete('/hello', (req, res) => {
    res.status(204)
    res.send('<h1>DELETE - Hello World</h1>');
})

app.get('/student', (req, res) => {
    res.status(200)
    const stud = {
        name: 'John Doe',
        age: 25,
    }
    res.json(stud);
});

// Query String Parameters
//http://localhost:3000/employee?fnm=pritesh&lnm=patel
app.get('/employee', (req, res) => {
    console.log(req.query)
    // res.send(req.query);
    const fnm = req.query.fnm;
    const lnm = req.query.lnm;
    res.send(`First Name: ${fnm}, Last Name: ${lnm}`);
});


// Path Parameters
//http://localhost:3000/employee/pritesh/patel/toronto
app.get('/employee/:fnm/:lnm/:city', (req, res) => {
    console.log(req.params)
    const fnm = req.params.fnm;
    const lnm = req.params.lnm;
    const city = req.params.city;
    res.send(`First Name: ${fnm}, Last Name: ${lnm}, City: ${city}`);
});


app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});


