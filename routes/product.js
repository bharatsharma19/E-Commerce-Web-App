var express = require("express");
var router = express.Router();
var pool = require("./pool");

router.get("/product", function (req, res, next) {
  res.render("productInterface");
});

router.post("/product/submitted", function (req, res) {
  res.render("index");
});

module.exports = router;
