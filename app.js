var express = require('express');
var app = express();

app.use(express.static(__dirname));

console.log("http://localhost:8088/www/index.html");
app.listen(8088);
