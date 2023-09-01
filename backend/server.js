const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3001;

// Configuration de la connexion à la base de données MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'zermapp'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connecté à la base de données MySQL');
});

app.listen(port, () => {
    console.log(`Serveur backend sur le port ${port}`);
});
