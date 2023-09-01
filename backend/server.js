const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); // Importez le module CORS

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

// Ajoutez le middleware CORS à votre application Express
app.use(cors());

// Récupérez les events
app.get('/get-event', (req, res) => {
    db.query('SELECT * FROM events', (err, results) => {
        if (err) {
            console.error('Erreur lors de la requête MySQL :', err);
            res.status(500).json({ error: 'Erreur lors de la requête MySQL' });
        } else {
            // Vous pouvez renvoyer les résultats sous forme de réponse JSON
            res.status(200).json({ events: results });
        }
    });
});

// Une personne s'est inscrite à l'event

app.get('/registered-to-event', (req, res) => {
    db.query('INSERT INTO registereds (first_name, last_name, email) SELECT \'Benjamin\', \'Breuil\', \'benjaminbreuil@gmail.com\' WHERE NOT EXISTS (SELECT 1 FROM registereds WHERE email = \'benjaminbreuil@gmail.com\');', (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'insertion :', err);
            res.status(500).json({ error: 'Erreur lors de l\'insertion' });
        } else {
            res.status(200).json({ message: 'Inscription réussie' });
        }
    });
});

app.listen(port, () => {
    console.log(`Serveur backend sur le port ${port}`);
});
