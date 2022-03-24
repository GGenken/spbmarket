require('dotenv').config();

const express = require('express');
const app = express();

const expressSession = require('express-session');
const pgSession = require('connect-pg-simple')(expressSession);
const dbconn = require('./db');

const cors = require('cors');
app.use(cors());

app.use(expressSession({
    store: new pgSession({
        pool: dbconn,
        schemaName: 'users',
        tableName: 'sessions',
        createTableIfMissing: true
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }
}));


app.use(express.static("public"));

app.use("/api/user", require("./routes/api/user/user"));
app.use("/api/offer", require("./routes/api/offer/offer"));

app.listen(3000);
