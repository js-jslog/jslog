var express = require('express');
var router = express.Router();

router.get('/article1', function(req, res, next) {
    res.render('articles/article1', {
        title: 'Article 1',
    });
});

router.get('/', function(req, res, next) {
    res.render('articles', {
        title: 'Articles',
    });
});

module.exports = router;
