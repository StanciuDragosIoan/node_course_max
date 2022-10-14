//import http module
const http = require("http");

//create server
const server = http.createServer((req, res) => {
  console.log(req);
  //   res.write(`
  //     <h1>Test</h1>
  //   `);
  //   res.end();
  process.exit(1); //exit on request
});

//start the server
server.listen(3000);
