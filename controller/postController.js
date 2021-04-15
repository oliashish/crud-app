const PostModel = require("../models/postModel");

const Create = (req) => {
    const data = req.body;
    PostModel.Create(data);
};

const GetAll = (res) => {
    PostModel.GetAll(function (err, result) {
        res.send(result);
    });
};
const GetByID = (id, res) => {
    PostModel.GetByID(id, function (err, result) {
        res.send(result);
    });
};
const Update = (id, data) => {
    PostModel.Update(id, data);
};

const Delete = (id) => {
    PostModel.Delete(id);
};

module.exports = {
    Create,
    GetAll,
    GetByID,
    Update,
    Delete,
};
