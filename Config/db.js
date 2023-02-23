const mongoose=require("mongoose");
mongoose.set("strictQuery", false);
const connection = mongoose.connect("mongodb://127.0.0.1:27017/mock10on230223");

module.exports = {connection}
// const mongoose=require("mongoose");
// // const env=require("dotenv")
// mongoose.set("strictQuery", false);
// require('dotenv').config();

// const connection = mongoose.connect(process.env.mongoURL);

// module.exports = {connection}