const mongoose = require('mongoose');

const Student = mongoose.model('Student', { 
    name: String,
    age: Number,
    grade: Number,
    createDate: String,
    updateDate: String
});

module.exports = Student;