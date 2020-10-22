const express = require("express");
//import routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const bodyparser = require("body-parser");
const path = require("path");
// const rootDir = require("./utils/path");

//create express app
const app = express();

//parse body data
app.use(bodyparser.urlencoded({ extended: false }));
//serve files statically (read access only)
app.use(express.static(path.join(__dirname, "public")));

//use routes

//add filter for /admin (filters routes starting with "/admin")
//now all routes from the admin.js routes start with /admin
app.use("/admin", adminRoutes);
app.use(shopRoutes);

//send 404 page
app.use((req, res, next) => {
  // res.status(404).send("<h1>404 page not found X_X!</h1>");
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
