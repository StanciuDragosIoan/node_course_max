//import http module
const http = require("http");

//create server
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <h1>Welcome new user..</h1>
    <form action="/create-user" method="POST">
        <input type='text' name='user'>
        <button type='submit'>Send</button>
    </form>
    `);
    return res.end();
  } else if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
        <head><title>Users page</title></head>\
        <body>
        <ul>
            <li>User 1</li>
            <li>User 2</li>
            <li>User 3</li>
            <li>User 4</li>
        </ul>
        </body>
        </html>
    `);
    return res.end();
  } else if (url === "/create-user" && method === "POST") {
    const body = [];
    //register event listener for data
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    //register event listener for end of data
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split("=")[1]);
    });
    res.end("parsing post request body..");
  }
});

//start the server
server.listen(3000);
