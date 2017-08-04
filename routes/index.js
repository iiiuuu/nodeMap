var express = require('express');
var router = express.Router();
var  AJK=require("./db/spriderMongdb").AJK;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/getInfo',function (req,res,next) {
 var query = AJK.find({},{_id:0,locals:1})
  query.exec(function(err, data) {
    var dataNewList= data.map(function (x) {
          return x.locals;})
    console.log(dataNewList);
    if (!err) {
      res.end(JSON.stringify({status:200,dataList:dataNewList}));
    } else {
      res.end(JSON.stringify({status:false,dataList:null}))
    }
  });
});
module.exports = router;
