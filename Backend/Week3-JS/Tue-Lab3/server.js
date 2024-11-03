const os = require('os');  // talking about require
const http = require('http');
const fs = require('fs');
const path = require('path');

/*console.log(os.cpus());
console.log(os.homedir());
console.log(os);*/

//Writing a HTTP server
http.createServer((req, res) => { // req = request, res = response
    console.log(req.url);
    console.log(req.method); // will log the method of the request object
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Home Page</h1>');
    }

    if(req.url == '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>About Page</h1>');
    }

    if(req.url == '/student'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Student Page</h1>');
        const stud = {
            name: 'John Doe',
            age: 20,
            course: 'Computer Science'
        }
        res.write(JSON.stringify(stud)); // we need the JSON stringify method to pass stud cuz stud is originally an object
    }
    //res.write('Hello World');
    res.end(); // end() method ends req/res cycle
    //res.end('Hello World');
}).listen(3000, () => { // listen(port, function to log which port is being ran)
    console.log('Server is running on port 3000');
});
//http://localhost:3000
// ctrl + c to close server
// server is always in listen mode