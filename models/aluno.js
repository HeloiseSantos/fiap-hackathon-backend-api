const mongoose = require('mongoose');

const Aluno = mongoose.model('Aluno', { 
    name: String,
    age: Number,
    grade: Number,
    createDate: String,
    updateDate: String
});

module.exports = Aluno;