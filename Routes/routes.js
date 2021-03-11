const route = require("express").Router();
const postcontroller = require("../controller/createPostController");

route.post("/create", (req, res) => {
    const data = req.body;
    console.log(data);
});
route.get("/getitems", (req, res) => {
    res.send("in /getitems route");
});

module.exports = route;
