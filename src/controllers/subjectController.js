const Subject = require('../models/subject');
const Exam = require('../models/exam');

exports.getSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find();
        res.render('subject/subjectList', { subjects });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.addSubject = async (req, res) => {
    try {
        const subject = new Subject(req.body);
        await subject.save();
        res.redirect('/subjects');
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.showAddForm = (req, res) => {
    res.render('subject/addSubject');
};

exports.showEditForm = async (req, res) => {
    try {
        const subject = await Subject.findById(req.params.id);
        res.render('subject/editSubject', { subject });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateSubject = async (req, res) => {
    const { id } = req.params;
    const { name, level, achievements } = req.body;
    try {
        const updatedSubject = await Subject.findByIdAndUpdate(id, { name, level, achievements }, { new: true });
        res.redirect('/subjects');
    } catch (error) {
        console.error(error);
        res.status(500).send('Wystąpił błąd podczas aktualizacji przedmiotu.');
    }
};

exports.deleteSubject = async (req, res) => {
    try {
        await Subject.findByIdAndDelete(req.params.id);
        res.redirect('/subjects');
    } catch (error) {
        console.error(error);
        res.status(500).send('Wystąpił problem podczas usuwania przedmiotu.');
    }
};

exports.showSubjectDetails = async (req, res) => {
    try {
        const subject = await Subject.findById(req.params.id);

        if (!subject) {
            return res.status(404).send('Przedmiot nie znaleziony.');
        }

        const exams = await Exam.find({ subjectId: subject._id });

        res.render('subject/subjectDetails', {
            subject: subject,
            exams: exams
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Wystąpił błąd serwera.');
    }
};
