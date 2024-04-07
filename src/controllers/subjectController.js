const Subject = require('../models/subject');

exports.getSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find();
        res.render('subjectList', { subjects });
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
    res.render('addSubject');
};

exports.showEditForm = async (req, res) => {
    try {
        const subject = await Subject.findById(req.params.id);
        res.render('editSubject', { subject });
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

