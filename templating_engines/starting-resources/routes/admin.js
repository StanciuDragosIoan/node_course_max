const path = require("path");
const express = require("express");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  console.log("Product page");
  // res.sendFile(path.join(__dirname, "../views/add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
});

router.post("/product", (req, res, next) => {
  products.push({ title: req.body.title, docTitle: "Shop" });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
