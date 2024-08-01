var fs = require('fs');

fs.rename('apple.txt','mango.txt', function(err) {
	if(err) throw err;
	console.log('File Renamed!');
});