var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    id: 1,
    name: 'Yusuke',
    from: 'Japan'
  })
});

module.exports = router;
