const pgp = require('pg-promise')();
const connectionString = "postgres://localhost:3001/memedb"
const db = pgp(connectionString);

module.exports = db;

