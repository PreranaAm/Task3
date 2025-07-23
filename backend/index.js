const express=require("express")
const app=express()
const dbconnect=require("./dbconnect")
const book=require("./models/book")
var cors = require('cors')
// require('dotenv').config()
// console.log(process.env)
const api=require("./routes/bookapi")
app.use(cors())

app.use("/",api)

app.listen(8080,(req,res)=>{
    console.log("connect")
})