const express = require("express");
const router = express.Router();

router.get("/", (req, res)=> {
    res.write("homepage here");
    res.end();
});

module.exports = router;