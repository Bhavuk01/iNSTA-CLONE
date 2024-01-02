const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const USER = mongoose.model("USER");

router.get('/', (req, res) => {
    res.send('API is working');
});

router.post("/signup", (req, res) => {
    const { fullname, userName, email, password } = req.body;

    const user = new USER({
        fullname,
        userName,
        email,
        password
    });

    user.save()
        .then(user => {
            res.json({ message: "Saved successfully" });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Failed to save user" });
        });
});

module.exports = router;

