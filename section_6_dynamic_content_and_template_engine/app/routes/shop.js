const express = require("express");
const path = require("path");

const rootDir = require("../utils/path");
const adminData = require("./admin");
const router = express.Router();
router.get("/", (req, res, next) => {
  console.log("in /  middleware this always runs");
  // res.send("homepage");
  console.log(adminData.products);
  //send file
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  //render pug template
  const products = adminData.products;
  //pass data to pug template engine
  res.render("shop", { prods: products, docTitle: "Shop", path: "/" });
});

module.exports = router;
