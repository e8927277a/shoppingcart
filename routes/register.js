var express = require('express');
var router = express.Router();
var admin = require("firebase-admin");

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: '33',data :'會員頁面' });

});

module.exports = router;