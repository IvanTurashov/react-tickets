const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes.js');
const errorHandler = require('./handlers/error.js');
const API = require('../shared/API.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(API.base, routes);
app.use(errorHandler);

const port = 5010;
app.listen(port, () => console.log(`Listening on port ${port}`));