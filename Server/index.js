const express = require("express")
const mongoose = require("mongoose")
const StudentController = require("./app/controller/StudentController")
// const StudentController = require("./app/controller/module/StudentController")
const PORT = 8000

mongoose.connect("mongodb://localhost:27017/StudentDb")
const app = express()

app.use(express.json());

app.get('/',(req,res) =>{
    res.send("welcome to the coding world")
})
app.get('/about',(req,res)=>{
    res.send("about page")
})

app.post("/student",StudentController.create);
app.get("/student",StudentController.readAll);
app.get("/student/:id",StudentController.readOne);
app.put("/student/:id",StudentController.update);
app.delete("/student/:id",StudentController.destroy);

app.listen(PORT,()=>{
    console.log(`Server started at
        http://localhost:${PORT}`)
})