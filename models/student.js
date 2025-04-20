const mongoose = require('mongoose');

const Student = mongoose.model('Student', { 
    name: String,
    age: Number,
    grade: Number,
    interests: [String],
    createDate: String,
    updateDate: String
});

module.exports = Student;