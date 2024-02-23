var mongoose = require("mongoose");

var userschema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    contact:{
        type:String
    },
    address:{
        type:String
    }
})

module.exports = mongoose.model("usermodel",userschema);