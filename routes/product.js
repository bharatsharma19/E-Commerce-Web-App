var express = require("express");
var router = express.Router();
var pool = require("./pool");

router.get("/product", function (req, res, next) {
  res.render("productInterface", { messageError: "", message: "" });
});

router.get("/product/fetch_all_categories", function (req, res) {
  pool.query("select * from category", function (error, result) {
    if (error) {
      {
        res.status(500).json([]);
      }
    } else {
      res.status(200).json({ result: result });
    }
  });
});

router.post("/product/submitproduct", function (req, res) {
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
        res.render("productInterface", {
          message: "",
          messageError: "Server Error",
        });
      } else {
        console.log("Result : ", result);
        res.render("productInterface", {
          message: "Record Submitted to Database",
          messageError: "",
        });
      }
    }
  );
});

module.exports = router;
