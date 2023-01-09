const express = require('express');
const router = express.Router();
let movieList = [];
router.get('/',(req,res)=>{
    res.send(movieList);
});
router.post('/',(req,res)=>{
    const data = req.body;
    console.log(data);
    movieList.push(data);
    res.send(`${data.Name} add to the database`)
});

router.get('/:id',(req,res)=>{
    const {id} = req.params;
    const found = movieList.find((data)=> data.id == id);
    res.send(found);
})

module.exports = router;