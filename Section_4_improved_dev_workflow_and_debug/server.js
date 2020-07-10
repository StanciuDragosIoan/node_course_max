//import http module
const http = require("http");
const routes = require("./routes.js");

//create server
const server = http.createServer(routes);
console.log("Testing..");
//start the server
server.listen(3000);
