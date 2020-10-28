var mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testing'
})

connection.connect(() =>{
    console.log("DB is connected")
})

module.exports = connection;