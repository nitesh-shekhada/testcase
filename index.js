require("dotenv").config()

const express = require("express");
const app = express();


app.get('/',(req,res)=>{
    res.send("Welcome to the dashboard")
})

app.get('/user',(req,res)=>{
    res.send("Welcome to the user")
})

app.get('/about',(req,res)=>{
    res.send("Welcome to the about")
})

app.listen(process.env.PORT || 3000,()=>{
    console.log("SErver is running on port",process.env.PORT)
})


module.exports = app 
