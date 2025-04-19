const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

const alunosRoutes = require("../routes/alunosRoutes");
app.use("/alunos", alunosRoutes);

module.exports = app;
