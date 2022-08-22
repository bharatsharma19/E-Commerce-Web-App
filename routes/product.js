var express = require("express");
var router = express.Router();
var pool = require("./pool");

router.get("/product", function (req, res, next) {
  res.render("productInterface");
});

router.post("/product/submitted", function (req, res) {
  pool.query(
    "insert into products(categoryid, subcategoryid, brandid, productname, price, offerprice, rating, description, stock, status) values(?,?,?,?,?,?,?,?,?,?)",
    [
      req.body.categoryid,
      req.body.subcategoryid,
      req.body.brandid,
      req.body.productname,
      req.body.price,
      req.body.offerprice,
      req.body.rating,
      req.body.description,
      req.body.stock,
      req.body.status,
    ],
    function (error, result) {
      if (error) {
        console.log("Error : ", error);
      } else {
        console.log("Result : ", result);
      }
    }
  );

  if (pool) {
    console.log("Success");
  } else {
    console.log("Error");
  }
  
  res.render("productInterface");
});

module.exports = router;
