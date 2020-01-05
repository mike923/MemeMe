const pgp = require('pg-promise')();
const connectionString = "postgress://localhost:5432/memedb"
const db = pgp(connectionString);

module.exports = db;

