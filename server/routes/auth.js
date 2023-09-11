const express = require("express");
const router = express.Router();
require("../db/con");
const User = require("../models/userSchema");

router.get("/", (req, res) => {
  res.send(`Hello from server route!!`);
});

router.post("/register", async (req, res) => {
  const { name, phone, work, email, password, cpassword } = req.body;
  if (!name || !phone || !work || !email) {
    return res.status(422).json({ status: "field empty" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ status: "email already exists" });
    }
    const user = new User({ name, phone, work, email, password, cpassword });
    
    const userRegister = await user.save();
    if (userRegister) {
      return res.status(201).json({ message: "REGISTERED SUCCESSFULLY" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async(req, res) => {
   
    try{
const {email,password}=req.body;
if (!email || !password) {
    return res.status(422).json({ status: "field empty" });
  }
  const userLogin = await User.findOne({email:email});

  console.log(userLogin);
  if(userLogin){
      res.json({message:'signed in successfully'})
}else{
    res.status(400).json({message:'signin error'})
}
    }
    catch(err){
        console.log(err);
    }
});

router.get("/about", (req, res) => {
  console.log("this is about");
  res.send(`Hello from about!!`);
});

router.get("/contact", (req, res) => {
  res.send(`Hello from contact!!`);
});

module.exports = router;
