const fs = require("fs");
function requestHandler(req, res) {
  //   console.log(req.url, req.method, req.headers);
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head>");
    res.write("<title>Enter Message</title>");
    res.write("</head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='msg'></input><button type='submit'>Send</button></form></body>"
    );

    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const msg = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", msg, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.end();
}

module.exports = requestHandler;
