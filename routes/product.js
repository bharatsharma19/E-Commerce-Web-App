var express = require("express");
var router = express.Router();
var pool = require("./pool");
var upload = require("./multer");

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
      res.status(200).json({ category: result });
    }
  });
});

router.get("/product/fetch_all_subcategories", function (req, res) {
  pool.query(
    "select * from subcategory where categoryid = ?",
    [req.query.categoryid],
    function (error, result) {
      if (error) {
        {
          res.status(500).json([]);
        }
      } else {
        res.status(200).json({ subcategory: result });
      }
    }
  );
});

router.get("/product/fetch_all_brands", function (req, res) {
  pool.query(
    "select * from brands where categoryid = ?",
    [req.query.categoryid],
    function (error, result) {
      if (error) {
        {
          res.status(500).json([]);
        }
      } else {
        res.status(200).json({ brand: result });
      }
    }
  );
});

router.post(
  "/product/submitproduct",
  upload.any("picture"),
  function (req, res) {
    console.log("Form Data : ", req.body);
    console.log("File : ", req.files);

    pool.query(
      "insert into products(categoryid, subcategoryid, brandid, productname, price, offerprice, rating, description, stock, status, picture) values(?,?,?,?,?,?,?,?,?,?,?)",
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
        req.files[0].filename,
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
  }
);

router.get("/product/display", function (req, res) {
  pool.query("select * from products", function (error, result) {
    if (error) {
      res.render("display", { status: false, data: "Server Error..." });
    } else {
      if (result.length == 0) {
        res.render("display", { status: false, data: "No Records Found !" });
      } else {
        res.render("display", { status: true, data: result });
      }
    }
  });
});

module.exports = router;
