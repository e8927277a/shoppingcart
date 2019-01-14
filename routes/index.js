var express = require('express');
var router = express.Router();
var fireData = require('../service/firedata')
/* GET home page. */
router.get('/', function(req, res, next) {
    fireData.ref('/User').once('value', function(snapshot) {
        console.log(snapshot.val());
        snapshot.forEach(function(data) {
            var title = "訪客";
            if(title != data.val().account) {
                res.render('index', {'title': title})
            }
        })
        
    })
});

module.exports = router;