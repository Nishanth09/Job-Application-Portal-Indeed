const mysql = require('mysql')

const pool = mysql.createPool({
  host: 'database-1.cgpwh4cefk7y.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: '12345678',
  database: 'indeed',
  port: 3306,
  debug: false,
  connectionLimit: 100,
  multipleStatements: true,
})

module.exports = {pool}
