const express = require('express');
const subjectRoutes = require('../src/routes/index');
const examRoutes = require('./routes/exam');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const methodOverride = require('method-override');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.render('home');
});

mongoose.connect("mongodb+srv://mikoajmicht:ixN3yuRGDzvdwUN8@cluster0.8oo6aml.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/', subjectRoutes);
app.use('/', examRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Click to open: http://127.0.0.1:${PORT}`);
});
