const express = require("express");
const router = express.Router();

router.get("/users", (req, res)=> {
    res.write("users here");
    res.end();
});

module.exports = router;