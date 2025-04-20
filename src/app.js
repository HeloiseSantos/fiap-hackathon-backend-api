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

const studentsRoutes = require("../routes/studentsRoutes");
app.use("/students", studentsRoutes);

module.exports = app;
