const router = require("express").Router();
const { body } = require("express-validator");
const studentController = require("../controllers/studentController");

router.get("/", studentController.getStudents);

router.get("/search", studentController.searchStudents);

router.get("/:id", studentController.getStudentById);

router.post("/", [body("createDate").isDate(), body("updateDate").isDate()], studentController.createStudent);

router.put("/:id", studentController.updateStudent);

router.delete("/:id", studentController.deleteStudent);

module.exports = router;
