const route = require("express").Router();

const PostController = require("../controller/postController");

route.get("/", (req, res) => {
    res.send("welcome to home route of the backend app...");
    console.log("welcome to home route of the backend app...");
});

/*route.post("/create", (req, res) => {
    const data = req.body;
    PostController.Post_Controller(data);
});
route.get("/getAllArticles", (req, res) => {
    PostController.Get_Controller(req, res);
});*/

module.exports = route;
