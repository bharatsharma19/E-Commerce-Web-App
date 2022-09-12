var express = require("express");
var router = express.Router();
var pool = require("./pool");

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

// Sign-Up Module
router.get("/createaccount", function (req, res) {
  res.render("signup", { message: "", messageError: "" });
});

router.post("/signedup", function (req, res) {
  pool.query(
    "insert into admin(email, password, adminname, mobile) values(?,?,?,?) ",
    [req.body.email, req.body.password, req.body.name, req.body.mobile],
    function (error, result) {
      if (error) {
        console.log("Error : ", error);
        res.render("signup", { message: "", messageError: "Server Error" });
      } else {
        console.log("Result : ", result);
        res.render("signup", {
          message: "Account Successfully Created",
          messageError: "",
        });
      }
    }
  );
});

// Sign-In Module
router.get("/login", function (req, res) {
  res.render("login", { msg: "" });
});

router.post("/checkadmin", function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  pool.query(
    "select * from adminlogin where (email = ?,password = ?)",
    [],
    function (error, result) {
      if (email === email && password === password) {
        console.log(error);
        res.render("dashboard");
      } else {
        console.log(result);
        res.render("login");
      }
    }
  );
});

module.exports = router;
