const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/mvc-lab';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Połączono z MongoDB.'))
    .catch(err => console.error('Problem z połączeniem do MongoDB:', err));
