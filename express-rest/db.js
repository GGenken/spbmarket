require('dotenv').config();
const pg = require("pg");

const pool = new pg.Pool({
    host: process.env.HOST,
    user: process.env.DBUSER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT
});

module.exports = pool;
