const express = require("express");
const cors = require("cors");
const route = require("./Routes/routes");
const bodyParser = require("body-parser");
const myTable = require("./models/myDatabase");

const PORT = 5000;

const app = new express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/", route);

app.listen(PORT, () => {
    console.log("App running successfully on port : ", PORT);
});
