var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
		fs.readFile('./data/PeopleList.json','utf-8',function(err,data){
		if(err){
			console.log(err);
		}else{
			data = JSON.parse(data);
			res.send(data);
		}
	})
});

module.exports = router;