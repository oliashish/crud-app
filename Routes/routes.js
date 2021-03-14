const route = require("express").Router();
const { Router } = require("express");
const postcontroller = require("../controller/PostController");
const Post_Article = postcontroller.Create_Post_Controller;
const Get_Article = postcontroller.Get_Post_Controller;

route.post("/create", (req, res) => {
    const data = req.body;
    Post_Article(data);
});
route.get("/getAllArticles", (req, res) => {
    Get_Article(req, res);
});

module.exports = route;
