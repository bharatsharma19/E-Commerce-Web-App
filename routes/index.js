var express = require("express");
var router = express.Router();
var pool = require("./pool");

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

router.get("/login", function (req, res) {
  res.render("login", { msg: "" });
});

module.exports = router;
