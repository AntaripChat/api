const express = require('express');
const movie = require('./router/data.router');
const app = express();

app.use(express.json());

app.use('/',movie);

app.get('/',(req,res)=>{
    res.send('Welcome To movie API')
});

app.get('*',(req,res)=>{
    
    res.send('Sorry Not Found');
})

app.listen(2000,()=>{
    console.log("Running on 2000");
})