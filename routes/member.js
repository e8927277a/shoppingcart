var express = require('express');
var router = express.Router();
var admin = require("firebase-admin");

/* GET home page. */
router.get('/profile', function (req, res, next) {
    res.render('profile', { title: '33',data :'這是會員頁面' });

});

router.get('/img', function (req, res, next) {
    res.render('profile', { title: '33',data :'這是img頁面' });

});

/* POST */
router.get('/img', function (req, res, next) {
    console.log(req.body.test);

});


module.exports = router;
