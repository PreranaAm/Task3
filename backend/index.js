const express=require("express")
const app=express()
const path=require("path")
const dbconnect=require("./dbconnect")
const book=require("./models/book")
var cors = require('cors')
// require('dotenv').config()
// console.log(process.env)
const api=require("./routes/bookapi")
app.use(cors())

app.use("/",api)
app.use(express.static(path.join(__dirname, "dist")));

// For all remaining routes, serve index.html (React SPA)
app.get("/{*any}", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
app.listen(8080,(req,res)=>{
    console.log("connect")
})