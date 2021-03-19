const PostModel = require("../models/postModel");

const Create = (req) => {
    const data = req.body;
    PostModel.Create(data);
};

const Get = (id, res) => {
    if (id) {
        PostModel.Get(id, function (err, result) {
            res.send(result);
        });
    } else {
        PostModel.Get(function (err, result) {
            res.send(result);
        });
    }
};

module.exports = {
    Create,
    Get,
};
