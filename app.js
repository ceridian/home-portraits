var fs = require('fs');
var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(__dirname));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000);
console.log('3000');
