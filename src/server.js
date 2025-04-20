require('dotenv').config()

const mongoose = require("mongoose");
const app = require("./app");

const port = 3001;

mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_USERPASSWORD}@cluster-fiap-hackaton-b.glhxzcn.mongodb.net/?retryWrites=true&w=majority&appName=cluster-fiap-hackaton-backend`
)
.then(() => {
    app.listen(port, () => {
    console.log(`Server listening in port ${port}`);
    });
})
.catch((err) => console.log(err));
