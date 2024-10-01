const express = require('express');
const empRouter = require('./employees'); //import modules
const userRouter = require('./users');
const errorHandlerMiddleware = require('./errorHandlerMiddleware');
const app = express();
const SERVER_PORT = process.env.PORT || 3030; //process.env.PORT allows developers to run the script in the port they want otherwise they would use port 3030

//use() is used to access the middleware
app.use(express.json()); //allows json bodies to be posted to the server to allow get requests of the json bodies
app.use(express.urlencoded({extended: true})); //*?

const loggerMiddleware = (req, res, next) => { // it sends the url and the request method plus the date in the terminal for this specific loggerMiddleware*?
    console.log(`Logged ${req.url} ${req.method} -- ${new Date()}`); //*?
    next(); //how is next() working here exactly*?
}

//Apply the middleware to all requests - Application Level Middleware
//app.use(loggerMiddleware);
app.use('/user', loggerMiddleware); //will only log what is in the url that includes /user

app.use(empRouter);
app.use(userRouter);
app.use('/user', userRouter);
app.use('/employee', empRouter);

//Error endpoint
// http://localhost:3030/error
app.get('/error', (req, res) => {
    throw new Error('This is a forced error');
    res.send('Welcome to Express error handling');
});

//Error midddleware handling
app.use(errorHandlerMiddleware); //without the errorMiddleware.js and this middleware handle, localhost:3030/error would log "This is a forced error"

app.listen(SERVER_PORT, () => {
    console.log('Server is running on port http://localhost:3030');
});

/*
    1) requests come first
    2) then middleware
    3) then api endpoints
    4) then errors *?
 */