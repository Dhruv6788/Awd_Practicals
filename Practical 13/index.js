const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
    const { url } = request;

    if (url === '/') {
        response.end('Welcome to the homepage!');
    } else if (url === '/about') {
        response.end('Welcome to the about page!');
    } else if (url === '/contact') {
        response.end('Welcome to the contact page!');
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('404 Not Found');
    }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});
