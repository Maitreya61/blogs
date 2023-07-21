const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')
const authController = require('./controllers/authController')
const blogController = require('./controllers/blogController')
const app = express()

//routes
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/auth',authController)
app.use('/blog',blogController)

//Connecting to the database
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`Connected to DB and listening on Port`, process.env.PORT)
    }) 
})
.catch((error)=>{
    console.log(error)
})

