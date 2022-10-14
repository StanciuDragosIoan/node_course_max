//import http module
const http = require("http");
const test = require("./routes.js");

//create server
const server = http.createServer(test);

server.listen(3000);
