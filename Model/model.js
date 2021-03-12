const db = require("./Database");

const create_Post_Model = (data) => {
    console.log("we are in model....");
    console.log(data);
    const title = data.title;
    const description = data.description;
    const created_on = data.createdOn;
    const country = data.country;

    db.query(
        "INSERT INTO myTable (title, description, created_on, country) VALUES (?,?,?,?)",
        [title, description, created_on, country],
        (err, result) => {
            console.log(
                "inside of db.query values are : ",
                data.country,
                data.title
            );
            if (err) {
                console.log(err);
            } else {
                console.log("post successfully created....! ");
            }
        }
    );
};


module.exports = create_Post_Model;
