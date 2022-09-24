const mysql = require("mysql");
const db = require("./config");

const connection = mysql.createConnection({
    host : db.HOST,
    user : db.USER,
    password : db.PASSWORD,
    database: db.DATABASE
})

module.exports = connection