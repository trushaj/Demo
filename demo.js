const express = require('express');

// express app
const app = express();

//register view engine
app.set('view engine','ejs');

//listen for requests
app.listen(3000);
app.get('/',(req,res)=>{
    res.sendFile('./index.html',{root:__dirname});
});

app.get('/about',(req,res)=>{
    res.sendFile('./about.html',{root:__dirname});
});

//redirect
app.get('/about-us',(req,res)=>{
    res.sendFile('/about');
});

// 404 error
app.use((req,res)=>{
    res.status(404).sendFile('./404.html',{root:__dirname});
});