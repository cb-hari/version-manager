var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  db.query("select * from attributes", function(err, data) {
    if (err) {
      console.log(err);
    } else {
      res.render('index', { title: 'Express' });
      console.log(data);
    }
  });
  
});

module.exports = router;
