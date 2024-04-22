const Exam = require('../models/exam');

exports.showAddExamForm = (req, res) => {
    const { subjectId } = req.params;
    res.render('exam/addExam', { subjectId });
};

exports.createExam = async (req, res) => {
    try {
        const { subjectId, name, description, date, grade } = req.body;
        const newExam = await Exam.create({ subjectId, name, description, date, grade });
        res.redirect(`/subjects`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Nie udało się dodać egzaminu.');
    }
};

exports.showCalendar = async (req, res) => {
    try {
        const exams = await Exam.find().populate('subjectId').lean();
        res.render('calendar', { exams: JSON.stringify(exams) });
    } catch (error) {
        console.error(error);
        res.status(500).send('Błąd serwera podczas pobierania egzaminów.');
    }
};


