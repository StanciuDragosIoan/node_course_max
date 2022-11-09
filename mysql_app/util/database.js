// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "node-course",
//   password: "test123",
// });

// module.exports = pool.promise();

const Sequelize = require("sequelize");
const sequelize = new Sequelize("node-course", "root", "test123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
