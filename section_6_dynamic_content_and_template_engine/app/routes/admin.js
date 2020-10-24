const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../utils/path");

const products = [];
//admin/add-product
router.get("/add-product", (req, res, next) => {
  console.log(" /add-product middleware");
  //serve static file
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  //pass data to pug template engine
  res.render("add-product", {
    pageTitle: "Add prod",
    path: "/admin/add-product",
  });
});

//admin/add-product
router.post("/add-product", (req, res, next) => {
  //redirect
  res.redirect("/");
  products.push({ title: req.body.title });
});

exports.routes = router;
exports.products = products;
