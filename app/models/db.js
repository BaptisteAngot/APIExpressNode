const mysql = require("mysql");
const dbConfig = require("../config/db.config");

// Creation de la connexion à la base de données
var connection = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

module.exports = connection;
