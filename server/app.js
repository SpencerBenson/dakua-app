const express = require('express');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose');
const {MONGO_URI} = require('./keys')

mongoose.connect(MONGO_URI,{ useNewUrlParser: true,useUnifiedTopology: true  })

mongoose.connection.on('connected', ()=>{
  console.log('connected to Mongo DB')
})

mongoose.connection.on('error', ()=>{
  console.log('Oops, seems like there was a db connection error:', error)
})
require('./models/user')
require('./models/post')

const auth = require('./routes/auth')
const post = require('./routes/post')

// Middlewares
app.use(express.json())
app.use(auth)
app.use('/posts',post)


const customMiddleware = (req,res,next) => {
  console.log('Custom middleware')
  next();
}

// app.use(customMiddleware)

app.get('/', (req,res) =>{
  console.log("you have hit the homepage")
  res.send('server running');
})
app.get('/about',customMiddleware, (req,res) =>{
  console.log("you have hit the Aboutpage")
  res.send('About page');
})

app.listen(PORT, ()=>{
  console.log('server running on port '+ PORT)
})
