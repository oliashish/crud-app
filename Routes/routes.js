const route = require("express").Router();

route.get("/", (req, res) => {
    res.send("welcome to home route of the backend app...");
    console.log("welcome to home route of the backend app...");
});

route.post("/posts", (req, res) => {
  
    PostController.Post_Controller(req);
});
route.get("/posts", (req, res) => {
    PostController.Get_Controller(req, res);
});

module.exports = route;
