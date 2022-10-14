//import http module
const http = require("http");

//create server
const server = http.createServer((req, res) => {
  //set content type header
  res.setHeader("Content-Type", "text/html");
  //send actual html as response
  res.write("<html>");
  res.write("<head><title>Basic Node Page</title></head>");
  res.write("<body><h1>Hello Node JS</h1></body>");
  res.write("</html>");
  //end response and send it to client
  res.end(); //can't call write() anymore after end()
});

//start the server
server.listen(3000);
