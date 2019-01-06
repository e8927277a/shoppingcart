var express = require('express');
var router = express.Router();
var admin = require("firebase-admin");
var fireData = require('../service/firedata')

/* GET home page. */
router.get('/profile', function (req, res, next) {
    res.render('profile', { title: '33',data :'這是會員頁面' });

});

router.get('/img', function (req, res, next) {
    res.render('profile', { title: '33',data :'這是img頁面' });

});

/* POST */
router.post('/register', function (req, res, next) {
    res.render('register')
    fireData.ref('/User').push.set({
        "account": req.query.account,
        "password": req.query.password,
        "repassword": req.query.repassword,
        "email": req.query.email,
        "userName": req.query.userName,
        "sex": req.query.sex,
        "phoneNumber": req.query.phoneNumber,
        "address": req.query.address
    })

});


module.exports = router;
