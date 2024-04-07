const express = require('express');
const subjectRoutes = require('../src/routes/index');
const examRoutes = require('./routes/exam');
const app = express();
const PORT = process.env.PORT || 3000;
const methodOverride = require('method-override');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.get('/', (req, res) => {
    res.render('home');
});

const indexRoutes = require('../src/routes/index');
app.use('/', indexRoutes);

require('./database');

app.use('/', subjectRoutes);
app.use('/', examRoutes);

app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
});
