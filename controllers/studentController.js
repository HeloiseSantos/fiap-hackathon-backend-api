const { validationResult } = require("express-validator");
const Student = require("../models/student");

exports.getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        return res.status(200).json(students);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};

exports.searchStudents = async (req, res) => {
    try {
        const searchString = req.query.q;

        if (!searchString) {
            return res.status(400).json({ message: "No search string provided." });
        }

        // Regex to case insensitive
        const regex = new RegExp(searchString, "i");

        const students = await Student.find({
            $or: [{ name: regex }, { interests: regex }],
        });

        return res.status(200).json(students);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};

exports.getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res
                .status(404)
                .json({ message: "There is no student with the requested id." });
        }

        return res.status(200).json(student);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};

exports.createStudent = async (req, res) => {
    try {
        const result = validationResult(req);

        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }

        const student = new Student({
            name: req.body.name,
            age: req.body.age,
            grade: req.body.grade,
            interests: req.body.interests,
            createDate: req.body.createDate,
            updateDate: req.body.updateDate,
        });

        const savedStudent = await student.save();

        return res.status(201).json(savedStudent);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};

exports.updateStudent = async (req, res) => {
    try {
        const result = validationResult(req);

        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }

        const student = await Student.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                age: req.body.age,
                grade: req.body.grade,
                interests: req.body.interests,
                createDate: req.body.createDate,
                updateDate: req.body.updateDate,
            },
            {
                new: true,
            }
        );

        if (!student) {
            return res
                .status(404)
                .json({ message: "There is no student with the requested id." });
        }

        return res.status(200).json(student);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);

        if (!student) {
            return res
                .status(404)
                .json({ message: "There is no student with the requested id." });
        }

        return res.status(204).json();
    } catch (error) {
        return res.status(500).json(error);
    }
};
