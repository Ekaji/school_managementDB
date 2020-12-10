const Student = require('../models/students.models');

exports.createStudent = (req, res, next) => {
    const student = new Student({
        firstname : req.body.firstname,
        middlename : req.body.middlename,
        lastname : req.body.lastname,
        age : req.body.age,
        gender : req.body.gender,
        class : req.body.class,
    });
    student.save().then(
        () => {
            res.status(201).json({message: "saved succesfully"})
        }
    ).catch(error => {
        res.status(400).json({error: error})
    })
};

exports.fetchStudent = (req,res, next) => {
    Student.find().then(
        (students) => {
            res.status(200).json(students)
        })
        .catch(error => {
            res.status(400).json({message: error})
        }) 
};