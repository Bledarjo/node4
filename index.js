import 'dotenv/config';
import chalk from 'chalk';
import http from "http";

const hostname = process.env.HOST;
const port = process.env.PORT;
const name= process.env.MY_NAME;
const city= process.env.MY_CITY;
const language= process.env.MY_LANGUAGE;



const server= http.createServer((req, res) => {
    res.statusCode = 200;
    res.header('Content-Type', 'application/json');
    res.end(`{"message": "Hello World"}`);
});


server.listen(port,hostname,name,city,language, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log(chalk.blue(`I am ${name}, wilder in ${city}, and I love ${language}`));
});