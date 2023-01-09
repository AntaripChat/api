const express = require('express');
const body = require('body-parser');
const fs = require('fs');
const arr = [];
const router = express.Router();

const  student = JSON.parse(fs.readFileSync(__dirname + '/student.json'));
const  teacher = JSON.parse(fs.readFileSync(__dirname + '/teacher.json'));

router.get('/student',(req,res)=>{
    res.send(student);
});
router.get('/teacher',(req,res)=>{
    res.send(teacher);
});
router.post('/student',(req,res)=>{
    const data = req.body;
    arr.push(data);
    
});

module.exports = router;
