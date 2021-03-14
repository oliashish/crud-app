const { response } = require("express");
const db = require("./Database");

const create_Post_Model = (data) => {
    console.log("inside model file");
    console.log(data);

    const title = data.title;
    const description = data.description;
    const created_on = data.createdOn;
    const country = data.country;

    db.query(
        "INSERT INTO myTable (title, description, created_on, country) VALUES (?,?,?,?)",
        [title, description, created_on, country],
        (err, result) => {
            console.log();
            if (err) {
                console.log(err);
            } else {
                console.log("post successfully created....! ");
            }
        }
    );
};

const get_Post_model = (req, res) => {
    db.query("SELECT * FROM myTable", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
};

module.exports = {
    create_Post_Model,
    get_Post_model,
};
