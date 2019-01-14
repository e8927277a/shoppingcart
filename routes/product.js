var express = require('express');
var router = express.Router();
var admin = require("firebase-admin");
var fireData = require('../service/firedata')

/* GET home page. */
router.get('/profile', function (req, res, next) {
    // fireData.ref('/Product').once('value', function(snapshot) {
    //     console.log(snapshot.val());
    //     var str = '';
    //     snapshot.forEach(function(data) {
    //         var data = {
    //         'product_name': data.val().product_name,
    //         'detail': data.val().detail,
    //         'stock': data.val().stock,
    //         'price': data.val().price
    //         };
    //         str += '<li>' +
    //             '商品名稱: ' + data.product_name + '<br>' +
    //             '商品介紹: ' + data.detail + '<br>' +
    //             '商品存貨: ' + data.stock + '<br>' +
    //             '商品價格: ' + data.price + '<br>' +
    //             '<input type="submit" id="add" value="加入購物車" >' 
    //             + '</li>';
            
    //     })
         res.render('profile', {title: '購物區'})
    // })

});

router.post('/profile', function(req, res, next) {
    var oredr = req.body['order'];
    console.log(order)
    res.render('shoppingCart', {title: "購物車"})
})

module.exports = router;
//<%- data %>