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
    const data = PostController.Get(req, res);
    console.log(data);
});

module.exports = route;
