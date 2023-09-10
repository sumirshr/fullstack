const mongoose=require("mongoose");
const express=require("express");
const app=express();

const db="mongodb+srv://sumirshr03:poush03@cluster0.zqbbulv.mongodb.net/mernstack?retryWrites=true&w=majority"

mongoose.connect(db).then(()=>{
    console.log(`connection successful`)
})
.catch((err)=>{
    console.log(`connection failed`)
})

// middleware
const middleware=(req,res,next)=>{
console.log("this is a middleware");
next();
}


app.get('/',(req,res)=>{
res.send(`Hello from server!!`)

})
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


app.listen(3000,()=>{
    console.log("server runing...")
})