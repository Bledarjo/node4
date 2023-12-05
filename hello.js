// require('dotenv').config()
import 'dotenv/config'

// const http = require('http');
import http from "http"

const hostname = process.env.HOST;
const port = process.env.PORT;


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(`{"message": "Hello World"}`);
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});