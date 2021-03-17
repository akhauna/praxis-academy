const PgClient = require('pg').Client;

const db = new PgClient({
    database: 'unanshop',
    user: 'postgres',
    password: 'unanganteng'
});

module.exports = db;