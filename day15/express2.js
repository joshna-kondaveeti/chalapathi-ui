var express = require('express');
var app = express();

app.get('/home', function(req, res) {
	res.send("Welcome to home page!, made by joe ACDSWCDS");
});

app.post('/contact', function(req, res) {
	res.send("You just call the post method at '/contact!\n");
});


app.all('/test', function(req, res) {
	res.send("HTTP method doesn't have any effect on this route!");
});
app.listen(3000);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
