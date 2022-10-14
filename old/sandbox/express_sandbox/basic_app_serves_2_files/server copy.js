const http = require("http");
const path = require("path");

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  //   res.send("users");
  res.sendFile(path.join(__dirname, "views", "home.html"));
  //   res.end();
  console.log("homepage here");
  //   next();
});

app.get("/users", (req, res) => {
  res.send("homepage");
  res.end();
  res.sendFile(path.join(__dirname, "views", "users.html"));
  console.log("users here");
  //   next();
});
const server = http.createServer(app);
server.listen(5000);
