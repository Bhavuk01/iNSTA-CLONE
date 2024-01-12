const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {mongoUrl} = require("./keys")
const cors = require("cors")

app.use(cors())

require('./models/model');
app.use(express.json());
app.use(require("./routes/auth"));

// Update your MongoDB connection URI with the database name
mongoose.connect("mongodb+srv://bhavuk1668be21:n8VydeoG5TTKOu0s@cluster0.yfmkc17.mongodb.net/insta-auth", {
    
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});

const PORT = 5000;
app.get("/", (req, res) => {
  res.send({
    message: "Hello World!"
  });
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));


