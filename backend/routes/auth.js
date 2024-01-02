const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("USER"); // Assuming your model is named "User"
const bcrypt = require("bcrypt");

router.get('/', (req, res) => {
    res.send('API is working');
});

router.post("/signup", async (req, res) => {
    try {
        const { fullname, userName, email, password } = req.body;
        if (!fullname || !userName || !email || !password) {
            return res.status(400).json({ msg: "Please enter all fields" });
        }

        const existingUser = await User.findOne({ $or: [{ email: email }, { userName: userName }] });
        if (existingUser) {
            return res.status(409).json({ message: "Email or username already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({
            fullname,
            email,
            userName,
            password: hashedPassword
        });

        await user.save();
        res.json({ message: "Registered successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;
