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
