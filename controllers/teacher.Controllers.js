const Teacher = require('../models/teachers.models');

exports.createTeacher = (req, res, next) => {
    const teacher = new Teacher({
        firstname : req.body.firstname,
        middlename : req.body.middlename,
        lastname : req.body.lastname,
        age : req.body.age,
        gender : req.body.gender,
        qualification : req.body.qualification,
    });
    teacher.save().then(() => {
        res.status(201).json({message: 'new teacher added sucessfully'})
    }).catch((error) => {
        res.status(400).json({message: error})
    })
};

exports.fetchTeacher = (req, res, next) => {
    Teacher.find().then(
        (teachers) => {
        res.status(200).json(teachers)
    }).catch(error => {
        res.status(400).json({message: error})
    });
};