const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("USER");

router.get('/', (req, res) => {
    res.send('API is working');
});

router.post("/signup", (req, res) => {
    const { fullname, userName, email, password } = req.body;
    if (!fullname || !userName || !email || !password) {
        return res.status(400).json({ msg: "Please enter all fields" });
    }

    User.findOne({ $or: [{ email: email }, { userName: userName }] })
        .then(savedUser => {
            if (savedUser) {
                return res.status(409).json({ message: "Email or username already exists" });
            }
            const user = new User({
                name,
                email,
                userName,
                password: hashedPassword
            })

            user.save()
                .then(user => { res.json({ message: "Registered successfully" }) })
                .catch(err => { console.log(err) })
        })
        });

module.exports = router;
