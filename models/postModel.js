const e = require("express");
const { query } = require("./myDatabase");
const myTable = require("./myDatabase");

const Create = (data) => {
    console.log(data);
    const title = data.title;
    const description = data.description;
    const country = data.country;
    const created_on = data.created_on;
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
const Update = function (id, data) {
    console.log(id, data);
    const title = data.title;
    const description = data.description;
    const country = data.country;
    const created_on = data.created_on;

    myTable.query(
        `UPDATE myTable SET title=?, description=?, created_on=?, country=? WHERE id=?`,
        [title, description, created_on, country, id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log("success ... post updated..", id);
            }
        }
    );
};
const GetAll = function (result) {
    myTable.query("SELECT * FROM myTable", function (err, res) {
        if (err) {
            result(err, null);
        } else {
            const data = JSON.stringify(res);
            result(null, data);
        }
    });
};

const GetByID = function (id, result) {
    myTable.query(
        "SELECT * FROM myTable WHERE id=?",
        [id],
        function (err, res) {
            if (err) {
                result(err, null);
            } else {
                const data = JSON.stringify(res);
                result(null, data);
            }
        }
    );
};
const Delete = (id) => {
    myTable.query("DELETE FROM myTable WHERE id=?", [id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
};

module.exports = {
    Create,
    GetAll,
    GetByID,
    Update,
    Delete,
};
