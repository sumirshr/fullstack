const dotenv=require("dotenv");
const mongoose=require("mongoose");
const cors = require('cors');
const express=require("express");
const app=express();
app.use(cors());
dotenv.config({path:'./config.env'});
require("./db/con");
// const User=require('./models/userSchema');

app.use(express.json());
app.use(require('./routes/auth'));
const PORT=process.env.PORT;

// middleware
const middleware=(req,res,next)=>{
console.log("this is a middleware");
next();
}



app.get('/',(req,res)=>{
res.send(`Hello from server!!`)

})
app.get('/about',middleware,(req,res)=>{
    console.log("this is about");
res.send(`Hello from about!!`)

})
app.get('/contact',(req,res)=>{
res.send(`Hello from contact!!`)
})
app.get('/signin',(req,res)=>{
res.send(`Hello from login page!!`)
})
app.get('/signup',(req,res)=>{
res.send(`Hello from register page!!`)
})


app.listen(PORT,()=>{
    console.log("server runing...")
})