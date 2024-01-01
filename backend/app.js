const expresss = require("express")
const app = expresss()

const PORT = 5000;
app.get("/", (req, res) => {    
    res.send({
        message: "Hello World!"
        })
        })

        app.listen(PORT, ()=> console.log(`Server is running on ${PORT}`))

