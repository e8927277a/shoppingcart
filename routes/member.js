var express = require('express');
var router = express.Router();
var admin = require("firebase-admin");
var fireData = require('../service/firedata')

/* GET home page. */
router.get('/profile', function (req, res, next) {
    res.render('profile', { title: '33',data :'這是會員頁面' });

});

router.get('/login', function (req, res, next) {
    res.render('login', { title: '登入',data :'這是登入頁面' });

});

router.get('/register', function (req, res, next) {
    
    res.render('register', {title: '註冊會員', data :'這是會員註冊頁面'})

});

router.post('/login', function(req, res, next) {
    var account = req.body['account'],
        password = req.body['password'];

        fireData.ref('/User').once('value', function(snapshot) {
        console.log(snapshot.val());
        snapshot.forEach(function(data) {
            if(account == data.val().account && password == data.val().password) {
                res.cookie('user', account)
                res.render('index', {'title': account})
            }
        })
        
    })
    console.log(req.cookies.user)
})

router.get('/orderSearch', function(req, res, next) {
    var user = req.cookies.user,
        data,
        orderkey,
        orderitem

    fireData.ref('/Order').once('value', function(snapshot) {
        var str = ''
        snapshot.forEach(function(data) {
            console.log(data.val().order)
            orderkey = data.val().order
                for(item in orderkey) {
                    fireData.ref('/Product').once('value', function(snapshot) {
                        snapshot.forEach(function(data) {
                            console.log(data.key)
                            if(orderkey[item].key == data.key) {
                                str += data.val().product_name
                            //console.log(data.val().product_name)
                        }
                        })
                    })
                    console.log(str)
                    console.log(orderkey[item].key)
                }
            if(user == data.val().useraccount) {
                data = {
                    "name": data.val().userName,
                    "sex": data.val().sex,
                    "phonenumber": data.val().phoneNumber,
                    "email": data.val().email,
                    "address": data.val().address
                }
                
                
            }
                
                
                res.render('orderSearch', 
                {title: "我的訂單", 
                name: data.name,
                sex: data.sex,
                phonenumber: data.phonenumber,
                email: data.email,
                address: data.address})
            
                
            
                
            
        })
    })
})

module.exports = router;
