// Write all the rules(constraints?) for users and export them

const express = require('express');
const router = express.Router(); //Router() object

router.get('/', (req, res) => {
    res.send('Hello World from Users');
});

router.get('/about', (req, res) => {
    res.send('About Page');
});

module.exports = router;