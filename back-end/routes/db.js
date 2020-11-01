const pgp = require('pg-promise')();
const connectionString = process.env.DATABASE_URL || "postgress://localhost:5432/memedb"
const db = pgp(connectionString);

module.exports = db;

