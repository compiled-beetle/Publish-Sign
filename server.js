const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        const faviconPath = path.join(__dirname, 'favicon.ico');
        fs.readFile(faviconPath, (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Error loading favicon');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'image/x-icon');
                res.end(data);
            }
        });
    } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(
            "Publish-Signer \nCreate signatures for internet post and stuff... \nSo people know it's you. ",
            'utf-8'
        );
    }
});

server.listen(port, hostname, () => {
    console.log(`running at http://${hostname}:${port}/`);
});
