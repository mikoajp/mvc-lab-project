const express = require('express');
const subjectController = require('../controllers/subjectController');
const router = express.Router();

router.get('/subjects', subjectController.getSubjects);
router.post('/subjects', subjectController.addSubject);
router.get('/add-subject', subjectController.showAddForm);
router.get('/edit-subject/:id', subjectController.showEditForm);
router.post('/subjects/:id', subjectController.updateSubject);
router.delete('/subjects/:id', subjectController.deleteSubject);


module.exports = router;
