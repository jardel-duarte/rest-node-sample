const express = require('express');
const cors    = require('cors');

const app = express();
const router = express.Router();

//Rotas
const index = require('./routes/index');
const dfeRoute = require('./routes/dfeRoute');

app.use(cors());
app.use('/', index);
app.use('/dispatcher', dfeRoute);
module.exports = app;
