const PostModel = require("../models/postModel");

const Create = (req) => {
    const data = req.body;
    PostModel.Create(data);
};

const Get = function (req, res) {
    PostModel.Get(function (err, result) {
        res.send(result);
    });
};

module.exports = {
    Create,
    Get,
};
