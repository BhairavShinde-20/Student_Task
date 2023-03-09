const mongoose = require("mongoose");

// create schema ( format ) for database


const userSchema = new mongoose.Schema({
    rollno:Number,
    studentname:String,
    math:Number,
    science:Number,
    english:Number,
    hindi:Number,
    marathi:Number
})
module.exports =  mongoose.model("student",userSchema);