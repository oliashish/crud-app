const route = require("express").Router();
const PostController = require("../controller/postController");

route.get("/", (req, res) => {
    res.send("welcome to home route of the backend app...");
    console.log("welcome to home route of the backend app...");
});

route.post("/posts", (req, res) => {
    PostController.Create(req);
});
route.get("/posts", (req, res) => {
    PostController.Get(id, res);
});
route.get("/posts/:id", (req, res) => {
    const id = req.params.id;
    console.log("is id : ", id);
    PostController.Get(id, res);
});

module.exports = route;
