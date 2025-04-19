const router = require("express").Router();
const { body } = require("express-validator");
const alunoController = require("../controllers/alunoController");

router.get("/", alunoController.getAlunos);

router.get("/search", alunoController.searchAlunos);

router.get("/:id", alunoController.getAlunoById);

router.post("/", [body("createDate").isDate(), body("updateDate").isDate()], alunoController.createAluno);

router.put("/:id", alunoController.updateAluno);

router.delete("/:id", alunoController.deleteAluno);

module.exports = router;
