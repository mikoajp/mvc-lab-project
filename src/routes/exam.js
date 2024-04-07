const express = require('express');
const router = express.Router();
const examController = require('../controllers/examController');
const Exam = require('../models/exam');

router.post('/exams', examController.createExam);
router.get('/calendar', examController.showCalendar);

router.get('/api/exams', async (req, res) => {
    try {
        const exams = await Exam.find({});
        const events = exams.map(exam => {
            return {
                title: exam.name,
                start: exam.date.toISOString(), // FullCalendar wymaga formatu ISO
                // Możesz dodać inne właściwości, jak description czy id
            };
        });
        res.json(events);
    } catch (error) {
        console.error(error);
        res.status(500).send('Wystąpił błąd podczas pobierania egzaminów.');
    }
});

module.exports = router;
