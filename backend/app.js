const expresss = require("express")
const app = expresss()
const mongoose = require("mongoose")

require('./models/model')

mongoose.connect("mongodb+srv://bhavuk1668be21:n8VydeoG5TTKOu0s@cluster0.yfmkc17.mongodb.net/?retryWrites=true&w=majority")

mongoose.connection.on("connected" , ()=>{
    console.log('Conected to a MongoDB')
})

mongoose.connection.on("error" , ()=>{
    console.log('not connected MongoDB')
})

const PORT = 5000;
app.get("/", (req, res) => {    
    res.send({
        message: "Hello World!"
        })
        })

        app.listen(PORT, ()=> console.log(`Server is running on ${PORT}`))

