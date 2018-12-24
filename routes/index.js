var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {

    var list = {
        "message": "安安"
    }
 
    res.render('index', { 
        title: 'hello', 
        myName : '洧杰',
        list: list,
        tag: "<h1>hi</h1>" }
        );
});

module.exports = router;