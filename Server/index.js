const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const StudentController = require("./app/controller/StudentController")
const TeacherController = require("./app/controller/TeacherController")
// const AuthController = require("./app/controller/AuthController")
const authMiddleware = require("./app/middleware/authMiddleware")
const AuthController = require("./app/controller/AuthController")
// const AuthController = require("./app/middleware/authMiddleware")
// const StudentController = require("./app/controller/module/StudentController")
const PORT = 8000
try{

    mongoose.connect("mongodb://localhost:27017/StudentDb")
}
catch(err){
    console.log(err)
}
const app = express()

app.use(express.json());
 app.use(cors());


app.post("/student",StudentController.create);
app.get("/student",StudentController.readAll);
app.get("/student/:id",StudentController.readOne);
app.put("/student/:id",StudentController.update);
app.delete("/student/:id",StudentController.destroy);

app.post("/register",AuthController.register);
// app.post("/login",[authMiddleware], AuthController.login);

app.post("/teacher",TeacherController.create);
app.get("/teacher",TeacherController.readAll);
app.get("/teacher/:id",TeacherController.readOne);
app.put("/teacher/:id",TeacherController.update);
app.delete("/teacher/:id",TeacherController.destroy);

app.get('/',(req,res) =>{
    res.send("welcome to the coding world")
})
app.get('/about',(req,res)=>{
    res.send("about page")
})


app.listen(PORT,()=>{
    console.log(`Server started at
        http://localhost:${PORT}`)
})