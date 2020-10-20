const express = require("express");
const bodyparser = require("body-parser");

//create express app
const app = express();

//parse body data
app.use(bodyparser.urlencoded({ extended: false }));

app.use("/", (req, res, next) => {
  console.log("in /  middleware this always runs");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log(" /add-product middleware");
  res.send(`
    <form action="/product" method="POST">
        <input type="text" name="title">
        <button type="submit">Add product</button>
    </form>
  `);
});

app.use("/product", (req, res, next) => {
  //redirect
  res.redirect("/");
  // log data
  console.log(req.body.title);
});

app.use("/", (req, res, next) => {
  console.log("in /  middleware this always runs");
  res.send("homepage");
});

app.listen(3000);
