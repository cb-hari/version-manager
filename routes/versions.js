var express = require("express");
var router = express.Router();
var Version = require("../models/versions");

router.get("/", function(req, res) {
  Version.get(req.query, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.post("/", function(req, res) {
  Version.create(req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.get("/list", function(req, res) {
  Version.list(req.query, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
