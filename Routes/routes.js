const route = require("express").Router();
const postcontroller = require("../controller/createPostController");

route.post("/create", (req, res) => {
    const data = req.body;
    console.log(data);
    postcontroller(data);
});

module.exports = route;
