const http = require('http');
const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf8');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(index);
}).listen(8080);
