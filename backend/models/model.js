const mongoose = require("mongoose");
const validator = require("validator"); // Add this line for validation

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "Please provide your name"],
  },
  userName: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "Username is required"],
    match: /^[a-z0-9]+$/, // only alphanumeric characters are allowed in username field
    index: true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required."],
    validate: {
      validator: function (value) {
        return validator.isEmail(value); // Using validator.isEmail for validation
      },
      message: "Invalid Email Address",
    },
  },
  password: {
    type: String,
    required: [true, "Password is required."],
  },
});

const USER = mongoose.model("USER", userSchema);
