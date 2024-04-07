const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
    subjectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: String,
    date: {
        type: Date,
        required: true
    },
    grade: Number
});

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;
