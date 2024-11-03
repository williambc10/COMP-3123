const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello World from Employees");
});

router.get("/employees", (req, res) => {
    res.send("Get all Employees");
});

router.get("/employees/:id", (req, res) => {
    res.send(`Get Employee by ID: ${req.params.id}`);
});

// Get body data
router.post("/employees", (req, res) => { // for post you have to write it inside the JSON body part
    const emp = req.body; 
    res.send(emp);
});

router.put("/employees/:id", (req, res) => {
    res.send(`Update Employee by ID: ${req.params.id}`);
});

router.delete("/employees/:id", (req, res) => {
    res.send(`Delete Employee by ID: ${req.params.id}`);
});

module.exports = router;