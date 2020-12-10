const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    firstname : { type: String, required: true,},
    middlename : { type: String, required: false},
    lastname : { type: String, required: true},
    age : { type: Number, required: true},
    gender : { type: String, required: true},
    class : { type: String, required: true}
});

module.exports = mongoose.model('Student', studentSchema);