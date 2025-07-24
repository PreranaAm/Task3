const mongoose = require('mongoose');
require('dotenv').config()
// console.log(process.env)
main().catch(err => console.log(err));

async function main() {
 
 await mongoose.connect(process.env.dburl);
// await mongoose.connect("mongodb://127.0.0.1:27017/test");
}