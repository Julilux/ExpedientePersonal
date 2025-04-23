const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

// Prefijo para la API
app.use('/api/v1', routes);

module.exports = app;