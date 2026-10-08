const express = require("express")
const StudentController = require("./app/controller/module/StudentController")
const PORT = 5789
const app = express()
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