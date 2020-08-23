const express = require("express");
const router = express.Router(); 
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requirelogin")
const Post = mongoose.model('Post');

//the posts router directs users here
router.get('/myposts',requireLogin, (req,res)=>{
  Post.find({postedBy:req.user._id})
  .populate("postedBy","_id name")
  .then(myposts =>{
    res.json({myposts})
  })
  .catch(err=>{
    console.log(err);
  })
});
//the posts router directs users here
router.get('/',requireLogin, (req,res)=>{
  Post.find()
  .populate("postedBy","_id name")
  .then(posts =>{
    res.json({posts})
  })
  .catch(err=>{
    console.log(err);
  })
});
router.post('/',requireLogin, (req,res)=>{
  const {title,body} = req.body
  if(!title || !body) {
    return res.status(402).json({error:"Please add all the fields"})
  }
  // res.send('ok')
  req.user.password = undefined;
  const post = new Post({
    title,
    body,
    postedBy:req.user
  })
  post.save().then(result =>{
    return res.json({post:result})

  }).catch(err=>{
    console.log(err)
    return
  })

})

module.exports = router
