var express = require('express');
var app = express();
app.get('/receive', function (req, res) {  res.send('Hi, this is the TwilioBot listening endpoint!'); });
app.listen(8080, function () {  console.log('TwilioBot listening on port 8080.'); }); 