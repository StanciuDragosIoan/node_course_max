const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const sequelize = require("./util/database");
const Product = require("./models/product");
const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

//sample code
// db.execute("SELECT * FROM products")
//   .then((result) => {
//     console.log(result[0]);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//user middleware
app.use((req, res, next) => {
  User.findAll({ where: { id: 1 } })
    .then((user) => {
      req.user = user;
      // console.log(user[0].dataValues.id);
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

//set relations
Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);
sequelize
  // .sync({ force: true }) //resync data each time
  .sync()
  .then((result) => {
    return User.findAll({ id: 1 });
    // console.log(result);
  })
  .then((user) => {
    if (!user[0]) {
      User.create({ name: "Max", email: "test@test.com" });
    }
    // return Promise.resolve(user);
    //.then returns result wrapped in promise by default
    return user;
  })
  .then((user) => {
    console.log(user);
    app.listen(3000);
  })
  .catch((err) => console.log(err));
