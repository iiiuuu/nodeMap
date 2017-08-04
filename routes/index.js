var express = require('express');
var router = express.Router();
var  AJK=require("./db/spriderMongdb").AJK;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/getInfo',function (req,res,next) {
 var query = AJK.find({});
  query.exec(function(err, data) {
    console.log(data);
    if (!err) {
      res.render("index",{status:200,dataList:data});
    } else {
      res.render("index",{status:500,dataList:null});
    }
  });
/*  var test=new AJK({
    user:"test",
    name:String,
    age:String,
    test:String,
  })
  test.save(function (err) {
    console.log('save status:'+err);
  })*/
});
module.exports = router;
