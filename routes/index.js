var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Joseph Sinfield',
        title_image: 'family.jpg',
    });
});

router.get('/articles', function(req, res, next) {
    res.render('articles', {
        title: 'Articles',
        title_image: 'family.jpg',
    });
});

module.exports = router;
