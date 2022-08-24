var express = require("express");
var router = express.Router();
var pool = require("./pool");

router.get("/product", function (req, res, next) {
  res.render("productInterface", { message: "" });
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
        res.render("productInterface", { message: "Server Error" });
      } else {
        console.log("Result : ", result);
        res.render("productInterface", {
          message: "Product Successfully Added to Database",
        });
      }
    }
  );
});

module.exports = router;
