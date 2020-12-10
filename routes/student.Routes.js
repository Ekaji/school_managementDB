const express = require('express')
const router = express.Router();
const studentCtrl = require('../controllers/student.Controllers')

router.post('/', studentCtrl.createStudent );
router.get('/', studentCtrl.fetchStudent);

module.exports = router;