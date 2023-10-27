const mysql = require('mysql2/promise')

const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '@Pbkb1208',
    database: 'employeedb'
})

// mysqlPool.query("SELECT 1")
//     .then(data => console.log(data))
//     .catch(err => console.log("db connection failed"+err))

module.exports = mysqlPool