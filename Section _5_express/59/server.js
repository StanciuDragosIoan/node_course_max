const express = require("express");

//create express app
const app = express();

app.use("/", (req, res, next) => {
  console.log("this always runs");
  //send response
  //res.send("<h1> this always runs</h1>");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("in the middlewaRE2");
  //send response
  res.send("<h1> TEST add prod</h1>");
});

//use allows us to use middleware functions
//req, res + next function tb executed
app.use("/", (req, res, next) => {
  console.log("in the middlewaRE2");
  //send response
  res.send("<h1> TEST</h1>");
});

app.listen(3000);
