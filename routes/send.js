var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.post('/', function(req, res, next) {
	var data = req.body.text;
	fs.appendFile("./data/dialog.txt",data);
	res.send("1");
});

module.exports = router;