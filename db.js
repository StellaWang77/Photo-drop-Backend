// db.js
require('dotenv').config();
const { Pool } = require('pg');


console.log('DB config:', process.env.DB_HOST);

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection failed.', err.message);
  } else {
    console.log('Database connection successful, current time:', res.rows[0]);
  }
});
