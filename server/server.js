'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const data = require('./data');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/glossary', (req, res) => {
  return res.json(data.glossary);
});

const PORT = 5000;

app.listen(PORT);
console.log('api runnging on port ' + PORT + ': ');