const mysql = require("mysql");

const myTable = mysql.createConnection({
    user: "root",
    host: "127.0.0.1",
    password: "mysql001",
    database: "myLearningSchema",
});

myTable.connect(function (err) {
    if (err) {
        console.log("error:", err);
    } else {
        console.log("db connected successfully");
    }
});

module.exports = myTable;
