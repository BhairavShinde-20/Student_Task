const userModel = require("../models/student");
// create new user 
exports.createStudent = async (req, res) => {
    try {
        const users = await new userModel(req.body).save();
        res.json(users);
    } catch (err) {
        res.json({ err });
    }
}
// get a user using get methon for read data
exports.getAllStudent = async (req, res) => {
    try {
        const users = await userModel.find();
        res.json(users);
    } catch (err) {
        res.json({ err });
    }
}
exports.getStudent = async (req, res) => {
    try {
        const users = await userModel.find({ _id:req.params.userID });
        res.json(users);
    } catch (err) {
        res.json({ err });
    }
}
// delete a spacific user using delete method
exports.deleteStudent = (req, res) => {
    userModel.findOneAndDelete({ _id:req.params.userID }, (err, data) => {
        if (err) {
            res.json({ err });
        }
        else {
            res.json(data);
        }
    });
}
// update a spacific user using put method
exports.updateStudent = (req, res) => {
    userModel.findOneAndUpdate({ _id: req.params.userID },req.body,{new:true}, (err, data) => {
        if (err) {
            res.json({ err });
        }
        else {
            res.json(data);
        }
    });
}