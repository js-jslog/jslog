var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('articles', {
      header: 'Articles',
      image: {
          source: 'images/family.jpg',
          alt: 'test',
      },
  });
});

module.exports = router;
