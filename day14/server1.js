var joshna = require('http');

joshna.createServer(function (req,res) {
res.writeHead(200,{'Content-Type': 'text/html'});
res.write('I am Joshna');
res.end();
}).listen(8080);