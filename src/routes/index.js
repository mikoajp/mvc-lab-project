const express = require('express');
const subjectController = require('../controllers/subjectController');
const examController = require('../controllers/examController');
const router = express.Router();


router.get('/subjects', subjectController.getSubjects);
router.post('/subjects', subjectController.addSubject);
router.get('/add-subject', subjectController.showAddForm);
router.get('/edit-subject/:id', subjectController.showEditForm);
router.put('/subjects/:id', subjectController.updateSubject);
router.delete('/subjects/:id', subjectController.deleteSubject);
router.get('/subjects/:id', subjectController.showSubjectDetails);
router.get('/exams/add/:subjectId', examController.showAddExamForm);


module.exports = router;
