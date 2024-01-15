const { ObjectId } = require("mongodb")
const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    body:{
        type:String,
        required:true,
    },
    photo:{
        type: String,
        required: true
    },
    likes:[{
        type:ObjectId,
        ref:"USER"
    }],
    postedBy:{
        type:ObjectId,
        ref:'USER'
    }

})

mongoose.model("POST",postSchema)