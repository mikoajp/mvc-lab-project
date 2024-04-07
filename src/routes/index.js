const express = require('express');
const subjectController = require('../controllers/subjectController');
const router = express.Router();

router.get('/subjects', subjectController.getSubjects);
router.post('/subjects', subjectController.addSubject);

module.exports = router;
