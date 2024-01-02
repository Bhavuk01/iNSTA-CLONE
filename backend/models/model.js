const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:[true,"Please provide your name"]
    },
    userName:{
        type:String,
        unique:true,
        lowercase: true,
        required:[true,"Username is required"],
        match:/^[a-z0-9]+$/ ,  // only alphanumeric characters are allowed in username field
        index : true
    },
    email:{
        type: String,
        unique: true,
        required: [true, "Email is required."],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email Address");
                }
    },
    password:{
        type:String,
        required: [true, "Password is required."]
        },
    }
})

mongoose.model("USER", userSchema)