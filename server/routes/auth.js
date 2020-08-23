const express = require("express");
const router = express.Router(); 
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken') 
const {JWT_SECRET} = require('../keys')

const requireLogin = require('../middleware/requirelogin')

router.get("/", (req, res) => {
  res.send("Hello");
});
// for testing purposes
// router.get("/protected",requireLogin, (req, res) => {
//   res.send("Hello");
// });

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !name || !password) {
    return res.status(422).json({ error: "Please fill in all the input" });
  }
  User.findOne({ email: email })
  .then((savedUser) => {
    if (savedUser) {
      return res.status(422).json({ error: "user already exists" });
    }

    bcrypt.hash(password,12)
    .then(hashedPass => {
      const user = new User({
        name,
        email,
        password:hashedPass,
      });
  
      user.save()
      .then((user) => {
        return  res.json({ message: "Saved successfully"+user });
        })
        .catch(err => {
          console.log(err)
        });
    })
   
  })
  .catch(err=>{
    console.log (err)
  })

});

router.post("/signin",(req,res) => {
  const {email,password} = req.body

  if(!email || !password){
    return res.status(422).json({error:"Please add email and password"})
  }
  User.findOne({email:email})
  .then(savedUser =>{
    if(!savedUser){
      return res.status(422).json({error:"Invalid Email or Password"})
    }
    bcrypt.compare(password,savedUser.password)
    .then(doMatch =>  {
      if(!doMatch){
        return res.status(422).json({error:"Invalid email or password"})
      }
      //logged in
      const token = jwt.sign({id:savedUser._id},JWT_SECRET)

      return res.json({token: token})
    }).catch(err =>{
      console.log(err)
    })
  })
})
module.exports = router;
