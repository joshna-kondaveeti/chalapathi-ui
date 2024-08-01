var fs = require('fs');

fs.unlink('mango.txt', function(err) {
	if(err) throw err;
	console.log('File Renamed!');
});