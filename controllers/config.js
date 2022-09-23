// let mysql = require("mysql");
const mysql = require("mysql");

module.exports = mysql.createConnection( {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});
// const conn = mysql.createConnection(config)


// module.exports.conn = mysql.createConnection(config);