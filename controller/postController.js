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
        PostModel.Get(null, function (err, result) {
            res.send(result);
        });
    }
};
const Update = (id, data) => {
    PostModel.Update(id, data);
};

const Delete = (id) => {
    PostModel.Delete(id);
};

module.exports = {
    Create,
    Get,
    Update,
    Delete,
};
