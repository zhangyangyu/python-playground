const mysql = require('serverless-mysql')()

mysql.config({
    host     : process.env.TIDB_HOST,
    port     : process.env.TIDB_PORT,
    user     : process.env.TIDB_USER,
    password : process.env.TIDB_PASSWORD,
    database : "python_playground"
})

export default mysql
