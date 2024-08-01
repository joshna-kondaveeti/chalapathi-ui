var fs = require('fs');

fs.appendFile('apple.txt','Roses are beautiful!', function(err, file) {
	if(err) throw err;
	console.log('Saved!');
});