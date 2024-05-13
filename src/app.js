const express = require('express');
const subjectRoutes = require('../src/routes/index');
const examRoutes = require('./routes/exam');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
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

mongoose.connect("mongodb+srv://mikoajmicht:ixN3yuRGDzvdwUN8@cluster0.8oo6aml.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', subjectRoutes);
app.use('/', examRoutes);

app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
});
