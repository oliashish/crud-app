const Post_Model = require("../Model/model");
const Create_Post_Model = Post_Model.create_Post_Model;
const Get_Post_Model = Post_Model.get_Post_model;

const Create_Post_Controller = (data) => {
    Create_Post_Model(data);
};

function Get_Post_Controller(req, res) {
    return Get_Post_Model(req, res);
}

module.exports = {
    Create_Post_Controller,
    Get_Post_Controller,
};
