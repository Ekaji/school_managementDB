const express = require('express');
const router = express.Router();
const teacherCtrl = require('../controllers/teacher.Controllers')

router.post('/', teacherCtrl.createTeacher);
router.get('/', teacherCtrl.fetchTeacher)

module.exports = router;