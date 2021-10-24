const express = require('express');
let app = express();
//let db = require('./database/index.js');
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
//let models = require('./database/models.js');

app.use(express.static('client/dist'));

let port = 1121;

app.listen(port, function() {
  console.log(`Bro......I am totally listening on port ${port}`)
})