const { validationResult } = require("express-validator");
const Aluno = require("../models/aluno");

exports.getAlunos = async (req, res) => {
    try {
        const alunos = await Aluno.find();
        return res.status(200).json(alunos);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};

exports.searchAlunos = async (req, res) => {
    try {
        const searchString = req.query.q;

        if (!searchString) {
            return res.status(400).json({ message: "No search string provided." });
        }

        // Regex to case insensitive
        const regex = new RegExp(searchString, "i");

        const alunos = await Aluno.find({
            $or: [{ title: regex }, { description: regex }],
        });

        return res.status(200).json(alunos);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};

exports.getAlunoById = async (req, res) => {
    try {
        const aluno = await Aluno.findById(req.params.id);

        if (!aluno) {
            return res
                .status(404)
                .json({ message: "There is no aluno with the requested id." });
        }

        return res.status(200).json(aluno);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};

exports.createAluno = async (req, res) => {
    try {
        const result = validationResult(req);

        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }

        const aluno = new Aluno({
            name: req.body.name,
            age: req.body.age,
            grade: req.body.grade,
            createDate: req.body.createDate,
            updateDate: req.body.updateDate,
        });

        const savedAluno = await aluno.save();

        return res.status(201).json(savedAluno);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};

exports.updateAluno = async (req, res) => {
    try {
        const result = validationResult(req);

        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }

        const aluno = await Aluno.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                age: req.body.age,
                grade: req.body.grade,
                createDate: req.body.createDate,
                updateDate: req.body.updateDate,
            },
            {
                new: true,
            }
        );

        if (!aluno) {
            return res
                .status(404)
                .json({ message: "There is no aluno with the requested id." });
        }

        return res.status(200).json(aluno);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};

exports.deleteAluno = async (req, res) => {
    try {
        const aluno = await Aluno.findByIdAndDelete(req.params.id);

        if (!aluno) {
            return res
                .status(404)
                .json({ message: "There is no aluno with the requested id." });
        }

        return res.status(204).json();
    } catch (error) {
        return res.status(500).json(error);
    }
};
