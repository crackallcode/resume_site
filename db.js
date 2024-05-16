const mysql = require("mysql2")

var db = mysql.createConnection({
    host: '127.0.0.1',
    database: "resume",
    user: 'root',
    password: 'password'
})

module.exports = db;
