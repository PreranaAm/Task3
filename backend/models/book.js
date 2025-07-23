const mongoose = require('mongoose');
const bookss=require("./init")


const bookschema=new mongoose.Schema(
    {
        title:{type:String,required:true},
        img:{type:String,required:true},
        author:{type:String,required:true},
        genre:{type:[String],required:true},
        publicationyear:{type:String,required:true}
    }
)
const book=mongoose.model("book",bookschema);
async function rk(params) {
    await book.deleteMany({})
    await book.insertMany(bookss);
  
}

rk()
module.exports=book;
