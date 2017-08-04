/**
 * Created by Administrator on 2017/8/3.
 */
var mongoose = require("mongoose");
var ajkSchema=new mongoose.Schema({
    title: String,
    detailUrl: String,
    locals:String,
    price:String,
 });
var userSchema=new mongoose.Schema({
    password:String,
    email:String,
    registerDate:String,
    username:String,
    _v:String,
    url:String,
})
var sjkSchema=new mongoose.Schema({
    detail:String,
    qq:String
})
var testSchema = new mongoose.Schema({
    user:String,
    name:String,
    age:String,
    test:String,
})
exports.AJK = mongoose.model("buildingInfo", ajkSchema,'buildingInfo'); //  与users集合关联