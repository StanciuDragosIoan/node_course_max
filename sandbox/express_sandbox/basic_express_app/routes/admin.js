const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../utils/path");

//admin/add-product
router.get("/add-product", (req, res, next) => {
  console.log(" /add-product middleware");
  // res.send(`
  //       <form action="/admin/add-product" method="POST">
  //           <input type="text" name="title">
  //           <button type="submit">Add product</button>
  //       </form>
  //     `);
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

//app.use() triggers for both get and post
//app.get() triggers only for get
//app.post() triggers only for post

//admin/add-product
router.post("/add-product", (req, res, next) => {
  //redirect
  res.redirect("/");
  // log data
  console.log(req.body);
});

module.exports = router;
