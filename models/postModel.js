const myTable = require("./myDatabase");

const Create = (data) => {
    myTable.query(
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

const Get = function (result) {
    myTable.query("SELECT * FROM myTable", function (err, res)  {
        if (err) {
            console.log(err);

        } else {
            result(null, res);
        }
    });
};

module.exports = {
    Create,
    Get,
};
