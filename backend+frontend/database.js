const mongoose=require("mongoose");
require('dotenv').config();
const url=process.env.MongoURL;

mongoose.connect(url);
const data=mongoose.connection;
data.on("connected",()=>{
    console.log("Database conncted");
})
data.on("disconncted",()=>{
    console.log("Database disconnected");
})

module.exports=data;
