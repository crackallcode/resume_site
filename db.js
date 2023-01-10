const mysql = require("mysql2")

var db = mysql.createConnection({
    host: 'localhost',
    database: "resume",
    user: 'root',
    password: 'password'
})

module.exports = db;