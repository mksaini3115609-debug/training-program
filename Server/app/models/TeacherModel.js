const { Schema,model} = require("mongoose");
const TeacherSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    subject:{
        type:String,
        require:false
    },
    phone:{
        type:"string",
        require:true
    },
})
    const TeacherModel = model("Teacher",TeacherSchema);
    module.exports = TeacherModel;