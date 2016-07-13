var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index');
//	fs.readFile('./data/familyList.txt','utf-8',function(err,data){
//		if(err){
//			console.log(err);
//		}else{
//			data = JSON.parse(data);
//			res.render('index', { data: data});
//		}
//	})
});

module.exports = router;
