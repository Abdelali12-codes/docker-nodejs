var express = require('express');
var app = express();

// define routes here..

var env = process.env.NAME

app.get('/', (req, res) => {
    res.send(`Hello World! ${env}`)
  })
var server = app.listen(5000, function () {
    console.log('Node server is running coool..');
});