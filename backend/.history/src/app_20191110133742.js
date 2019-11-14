const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();

const mongoose = require('../mongodb/db')();

var cors = require('cors')
app.use(cors())

var consign = require('consign');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

consign()
    .then('src/models')
    .then('src/controllers')
    .then('src/routes')
    .into(app);

module.exports = app;