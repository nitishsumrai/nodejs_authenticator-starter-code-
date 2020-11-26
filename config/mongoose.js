// require library
const mongoose = require('mongoose');
const { model } = require('../models/user');

// connect to the database
mongoose.connect('mongodb://localhost/nodejs_authentication', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });


// acquire the connection (to check if it is successfull)
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, 'error in connecting the database'));

// up and running then print the message
db.once('open', function () {
    console.log('Successfully connected to the database');
})

module.exports =db;