//import http module
const http = require("http");
//import file system module
const fs = require("fs");

//create server
const server = http.createServer((req, res) => {
  //parse url
  const url = req.url;
  if (url === "/") {
    //redirect
    res.write("<html>");
    res.write(`<head>
                <title>Enter Msg</title>
              </head>`);
    res.write(
      `<body>
        <form action='/message' method='POST'>
          <input type='text' name='message'>
          <button type='submit'>Send</button>
        </form>
      </body>`,
    );
    res.write("</html>");
    //return so we break execution
    return res.end();
  }
  //check url and request type
  if (url === "/message" && req.method === "POST") {
    //register event listener for data
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    //register event listener for end
    req.on("end", () => {
      //all chunks are in body now
      const parsedBody = Buffer
        .concat(body) //concat chunks
        .toString(); //parse as text
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
      res.statusCode = 302; //redirect
      res.setHeader("Location", "/");
      return res.end();
    });
  }
  //set content type header
  res.setHeader("Content-Type", "text/html");
  //send default html response
  res.write("<html>");
  res.write(`<head>
              <title>Basic Node Page</title>
            </head>`);
  res.write(`<body>
              <h1>Hello Node JS</h1>
             </body>
            `);
  res.write("</html>");
  //end response and send it to client
  res.end();
});

//start the server
server.listen(3000);

/*
NOTES

Because of the res.setHeader() call in line 50 (which executes
synchronously and immediately) when we trigger the  res.setHeader("Location", "/")
again in the on.("end", cb) event, we get an error as the headers
have already been set;

*/
