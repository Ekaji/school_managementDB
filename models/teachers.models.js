const mongoose = require('mongoose');

const teachersSchema = mongoose.Schema({
    firstname : { type: String, required: true,},
    middlename : { type: String, required: false},
    lastname : { type: String, required: true},
    age : { type: Number, required: true},
    gender : { type: String, required: true},
    qualification : { type: String, required: true}
});

module.exports = mongoose.model('Teacher', teachersSchema)


