// import packages
const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config(); // configure environment variable

// create database connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// export the connection
module.exports = pool.promise();
