const http = require('http');
const fs = require('fs');
const port = 3000;
const hostname = '127.0.0.1';

const handleReadFile = (statusCode, fileLocation, req, res) => {
    fs.readFile(fileLocation, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.writeHead(statusCode, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        }
    });
};

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        handleReadFile(200, './Pages/Home.html', req, res);
    } else if (req.url === '/about') {
        handleReadFile(200, './Pages/About.html', req, res);
    } else if (req.url === '/contact') {
        handleReadFile(200, './Pages/Contact.html', req, res);
    } else {
        handleReadFile(404, './Pages/Error.html', req, res);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server is running successfully at http://${hostname}:${port}`);
});
