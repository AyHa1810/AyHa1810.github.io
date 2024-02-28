// server.js : launches the website as a server
// required dependencies:
const express = require('express');
const morlog = require('morgan');
//const fs = require('fs');
const path = require('path');
//const bodyParser = require('body-parser');
const app = express();
//const router = express.Router();

// Set variables
var PORT = process.env.PORT || 8080;
var dir = path.join(__dirname, 'site');
app.set('port', PORT);

// Make express use the given stuff
app.use(morlog('tiny'));
//app.use(bodyParser.json());
app.use(express.static(dir));

app.listen(PORT, () => {
    console.log(`Express Server started on Port ${app.get('port')}`);
});