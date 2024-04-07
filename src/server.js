const express = require('express');
const mongoose = require('mongoose');
const subjectRoutes = require('../src/routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Witaj w aplikacji do śledzenia postępów w nauce!');
});

const indexRoutes = require('../src/routes/index');
app.use('/', indexRoutes);

mongoose.connect('your_mongodb_connection_string', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Połączono z MongoDB.'))
    .catch(err => console.error('Nie udało się połączyć z MongoDB:', err));

app.use('/', subjectRoutes);

app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
});
