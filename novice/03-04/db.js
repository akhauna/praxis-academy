const PgClient = require('pg').Client;

const db = new PgClient({
    database: 'unanshop',
    user: 'postgres',
    password: 'unanganteng',
    port :'8080'
});

module.exports = db;