const create_Post_Model = require("../Model/model");
const Create_Post_Model = require("../Model/model");

const Create_Post_Controller = (data) => {
    console.log("we're in create post controller function....");
    console.log("The data recieved is: ", data);
    Create_Post_Model(data);
};

const Get_Post_Model = (req, res) => {
    console.log("in controller method....");
    get_Post_Model(req);
};

module.exports = Create_Post_Controller;
