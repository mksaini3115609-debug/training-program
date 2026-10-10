const TeacherController={ 
    create(req,res){
        res.send({
            message:"success!new recod created",
        });
    },
    readAll(req,res){
        res.send({
            message:"success!new recod created",
        });
    },
    readOne(req,res){
        res.send({
            message:"success!new recod read",
        });
    },
    update(req,res){
        res.send({
            message:"success!new recod update",
        });
    },
    destroy(req,res){
        res.send({
            message:"dlete message",
        });
    },

}
module.exports=TeacherController