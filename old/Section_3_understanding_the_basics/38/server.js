//import http module
const http = require("http");
const routes = require("./routes");
console.log(routes.text);
//create server
const server = http.createServer(routes.handler);

//start the server
server.listen(3000);
