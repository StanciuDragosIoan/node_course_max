const express = require("express");
const homeRoutes = require("./routes/home");
const userRoutes = require("./routes/users");
const app = express();

app.use(homeRoutes);

app.use(userRoutes);

app.listen(6000);
