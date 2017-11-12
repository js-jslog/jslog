var express = require('express');
var router = express.Router();

router.get(/\/(.*)/, function(req, res, next) {
    var page = req.params[0];
    // TODO: make sure to check that a file exists for this page and throw and error if not
    res.render('articles/' + page, {
        title: page,
        title_image: page + '.jpg',
    });
});

module.exports = router;
