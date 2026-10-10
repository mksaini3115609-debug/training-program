const {Schema, model} =require("mongoose");
const studentSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    father:{
        type:String,
        required:true
    },
    email:{
        type:String
        
    },
    phone:{
        type:String
    
    },
    dob:{
        type:String,
        required:true
    },
    })

    const StudentModel =model("student",studentSchema)
    module.exports = StudentModel
