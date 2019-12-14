var express = require("express");
var router = express.Router();
var Attribute = require("../models/attributes");

router.get("/", function(req, res) {
  Attribute.getAll(function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.post("/", function(req, res) {
  console.log(req);
  Attribute.create(req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
