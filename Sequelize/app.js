const express = require("express");
let app= express();

//port to listen on
const PORT=3000;
const path=require("path");

const bodyParser= require("body-Parser");

//Engine
app.set("view engine","ejs");

//Request Parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//create Express Router
const router=express.Router();
app.use(router);

const rootPath=path.resolve("./Sequelize/dist");
app.use(express.static(rootPath));

return.use((err,req,res,next)=>{
    if(err){
        //Handle file type & maxsize of img
        return res.send(err.message);
    }
});

app.listen(PORT,err=>{
    if(err)
        return console.log('Cannot Listen on PORT: ${PORT}');
    console.log('Server is listening on: http://localhost:${PORT}/')
});

