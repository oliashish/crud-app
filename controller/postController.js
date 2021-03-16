const PostModel = require("../models/postModel");

const Create = (req) => {
    const data = req.body;
    PostModel.Post_Model(data);
};

const Get = (req, res) => {
    PostModel.Get_Model(req, res);
}

module.exports = {
    Post_Controller,
    Get_Controller,
};
