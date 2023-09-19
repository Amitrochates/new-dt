const mysql = require ("mysql")


const db = mysql.createConnection({
host:"localhost",
user:"root",
password:"Shlok@123",
database:"social"
})

module.exports = {db, mysql}