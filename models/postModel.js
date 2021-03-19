const { query } = require("./myDatabase");
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

const Get = function (id, result) {
    if (id) {
        const query = `SELECT * FROM myTable WHERE id=${id}`;
        myTable.query(query, function (err, res) {
            if (err) {
                console.log(err);
            } else {
                const data = JSON.stringify(res);
                result(null, data);
            }
        });
    } else {
        myTable.query("SELECT * FROM myTable", function (err, res) {
            if (err) {
                console.log(err);
            } else {
                const data = JSON.stringify(res);
                result(null, data);
            }
        });
    }
};

module.exports = {
    Create,
    Get,
};
