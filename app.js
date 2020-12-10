const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoute = require('./routes/student.Routes');
const teacherRoute = require('./routes/teacher.Routes')


// mongoose.connect('mongodb+srv://ekaji:KN2d39PyxExHr48@cluster0.8eaut.mongodb.net/<dbname>?retryWrites=true&w=majority')
//     .then(() => {
//         console.log('sucessfully connected')
//     })
//     .catch((error) => {
//         console.log('unable to connect to server')
//         console.error(error)
//     })

const URI = "mongodb+srv://ekaji:KN2d39PyxExHr48@cluster0.8eaut.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('connected to database');
})
.catch((error) => {
    console.log('unable to connect')
    console.log(`error message: ${error}`)
});

app.use(cors());
app.use(express.json());

app.use('/schooldb/student', studentRoute);
app.use('/schooldb/teacher', teacherRoute);

module.exports = app;