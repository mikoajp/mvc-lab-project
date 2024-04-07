const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    achievements: [String]
});

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;
