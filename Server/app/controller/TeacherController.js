const TeacherModel = require("../models/TeacherModel");
const TeacherController={ 
    async create(req,res){
        const body = req.body;
        try{
            await TeacherModel.create(body);
            res.status(201).send({
                message:"Success nwe record created.",
                reqBody: body,
            });
        } catch (error) {
            console.error("Error occured while new teacher recod created.",
                error
            );
            res.status(500).send({
                error: error.message,
            });
            
        }
        
    },
    async readAll(req, res) {
    const teachers = await TeacherModel.find();

    res.send({
        message: "Success! Teacher records found.",
        data: teachers,
    });
    },

    async readOne(req, res) {
    const params = req.params;

    const teacherDetails = await TeacherModel.findById(params.id);

    res.send({
        message: "Success! Teacher details found.",
        data: teacherDetails,
    });
    },

    async update(req, res) {
    const params = req.params;
    const body = req.body;

    await TeacherModel.findByIdAndUpdate(params.id, body);

    res.send({
        message: "Success! Teacher record has been updated.",
    });
    },

    async destroy(req, res) {
    const params = req.params;

    await TeacherModel.findByIdAndUpdate(params.id);

    res.send({
    message: "Success! Teacher record has been updated.",
    });
    },
};
module.exports = TeacherController;