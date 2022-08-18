var mysql = require("mysql");

var pool = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "minorproject",
  user: "root",
  password: "",
  multipleStatements: true,
});

if (pool) {
  console.log("Connection Success");
} else {
  console.log("Cant connect to db, Check ur db connection");
}

module.exports = pool;
