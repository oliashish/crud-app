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
    PostController.Get(null, res);
});
route.get("/posts/:id", (req, res) => {
    const id = req.params.id;
    console.log("is id : ", id);
    PostController.Get(id, res);
});
route.put("/posts/:id", (req, res) => {
    const data = req.body;
    const id = req.params.id;

    PostController.Update(id, data);
});

route.delete("/posts/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    PostController.Delete(id);
});

module.exports = route;
