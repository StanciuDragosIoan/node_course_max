//import file system module
const fs = require("fs");

const requestHandler = (req, res) => {
  //parse url
  const url = req.url;
  const method = req.method;

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
            </body>`
    );
    res.write("</html>");
    //return so we break execution
    return res.end();
  }
  //check url and request type
  if (url === "/message" && method === "POST") {
    //register event listener for data
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    //register event listener for end
    return req.on("end", () => {
      //all chunks are in body now
      const parsedBody = Buffer.concat(body) //concat chunks
        .toString(); //parse as text
      const message = parsedBody.split("=")[1];
      //register new event listener here
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302; //redirect
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  //set content type header
  res.setHeader("Content-Type", "text/html");
  //send actual html as response
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
};

//export as a global module
// module.exports = requestHandler;

module.exports.handler = requestHandler;
module.exports.text = "Hard coded text..";
