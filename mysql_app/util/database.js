const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "amaimon",
  database: "node-complete",
  password: "Cafea43@",
});

module.exports = pool.promise();
