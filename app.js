const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./routes/user.routes');
const apiGym = require('./routes/gym.routes');

//settings
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', api);
app.use('/api', apiGym);

module.exports = app