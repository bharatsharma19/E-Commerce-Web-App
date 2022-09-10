var express = require("express");
var router = express.Router();
var pool = require("./pool");
var upload = require("./multer");
const { query } = require("express");

router.get("/product", function (req, res, next) {
  res.render("productInterface", {
    messageError: "",
    message: "",
  });
});

router.get("/product/fetch_all_categories", function (req, res) {
  pool.query("select * from category", function (error, result) {
    if (error) {
      {
        res.status(500).json([]);
      }
    } else {
      res.status(200).json({
        category: result,
      });
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
        res.status(200).json({
          subcategory: result,
        });
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
        res.status(200).json({
          brand: result,
        });
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
  pool.query(
    "select P.*, (select C.categoryname from category C where C.categoryid=P.categoryid) as categoryname,(select S.subcategoryname from subcategory S where S.subcategoryid=P.subcategoryid) as subcategoryname,(select B.brandname from brands B where B.brandid=P.brandid) as brandname from products P",
    function (error, result) {
      if (error) {
        res.render("display", {
          status: false,
          data: "Server Error...",
        });
      } else {
        if (result.length == 0) {
          res.render("display", {
            status: false,
            data: "No Records Found !",
          });
        } else {
          res.render("display", {
            status: true,
            data: result,
          });
        }
      }
    }
  );
});

router.get("/product/editproduct", function (req, res) {
  pool.query(
    "update products set categoryid=?, subcategoryid=?, brandid=?,productname=?,price=?,offerprice=?,rating=?,description=?,stock=?,status=? where productid=?",
    [
      req.query.categoryid,
      req.query.subcategoryid,
      req.query.brandid,
      req.query.productname,
      req.query.price,
      req.query.offerprice,
      req.query.rating,
      req.query.description,
      req.query.stock,
      req.query.status,
      req.query.productid,
    ],
    function (error, result) {
      if (error) {
        console.log("Error : ", error);
        res.status(500).json({
          status: false,
          message: "Server Error...",
        });
      } else {
        console.log("Result : ", result);
        res.status(200).json({
          status: true,
          message: "Record Successfully Modified!",
        });
      }
    }
  );
});

router.get("/product/deleteproduct", function (req, res) {
  pool.query(
    "delete from products where productid=?",
    [req.query.productid],
    function (error, result) {
      if (error) {
        console.log("Error : ", error);
        res.status(500).json({
          status: false,
          message: "Server Error...",
        });
      } else {
        console.log("Result : ", result);
        res.status(200).json({
          status: true,
          message: "Record Successfully Deleted!",
        });
      }
    }
  );
});

router.get("/product/updatepicture", function (req, res) {
  
});

module.exports = router;
