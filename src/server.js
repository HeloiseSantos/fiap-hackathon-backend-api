const mongoose = require("mongoose");
const app = require("./app");

const port = 3001;

mongoose.connect(
    "mongodb+srv://fiaphackaton:1c1ETiO20VwnIkoN@cluster-fiap-hackaton-b.glhxzcn.mongodb.net/?retryWrites=true&w=majority&appName=cluster-fiap-hackaton-backend"
)
.then(() => {
    app.listen(port, () => {
    console.log(`Server listening in port ${port}`);
    });
})
.catch((err) => console.log(err));
