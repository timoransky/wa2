var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
    // Odpovedá vždy obsahom súbora
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end('Error loading index.html');
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(data);
        }
    });
});
server.listen(9000, function() {
    console.log('Listen on port 9000');
});
