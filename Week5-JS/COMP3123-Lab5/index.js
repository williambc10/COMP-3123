const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');
const path = require('path');

app.use(express.json());

// 1
router.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

//2
router.get('/profile', (req, res) => {
  fs.readFile(path.join(__dirname, 'user.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ message: 'Error reading user data' });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

//3
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  fs.readFile(path.join(__dirname, 'user.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ message: 'Error reading user data' });
    } else {
      const user = JSON.parse(data);
      if (user.username !== username) {
        res.json({ status: false, message: 'User Name is invalid' });
      } else if (user.password !== password) {
        res.json({ status: false, message: 'Password is invalid' });
      } else {
        res.json({ status: true, message: 'User Is valid' });
      }
    }
  });
});

//4
router.get('/logout', (req, res) => {
  const username = req.query.username;
  res.send(`<b>${username} successfully logged out.</b>`);
});

//5
app.use((err, req, res, next) => {
  res.status(500).send('Server Error');
});

app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));