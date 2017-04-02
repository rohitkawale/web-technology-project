
var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();
var conn = require('./config/connect.js');
var db = conn.get();
var secret='hello';
var expressjwt=require('express-jwt');
var jwt=require('jsonwebtoken');

//console.log(db);
/************    SELECTIONS and PROJECTIONS    **********/
var user={name:'rk'};
router.get('/getUsers',function(req,res){
    var f = {data:db};
    res.send(f);
    //f['name'] = 1;
    /*db.area.find({},f).toArray(function(err, docs) {
        res.json({ok:true,list:docs});
    });*/
});
router.post('/signup',function(req,res){
    var f = {data:db};

    console.log(req.body);

    db.users.findOne({name:req.body.name}, function (err, data) {

        console.log(data)
        if (!data) {
            db.users.insert(req.body,function(){
            console.log("inserted new user");
            });
            res.json({ok:true,user:user});
        }
        else{
            res.json({ok:false,user:user});
        }
    });
    
});
router.post('/login',function(req,res){
    console.log(req.body);
    var count=db.users.find({name:req.body.name , password:req.body.password}).count();
    if (count) {
            var token=jwt.sign({
                      data: 'req.body.name'
                }, 
                secret, 
                { expiresIn: '1h' });
            res.json({ok:true,token:token});
            
        }
        else{
            res.json({ok:false,token:''});
        }
    
})
var data=[];
data.push({name:'rohit'});
data.push({name:'ank'});
router.get('/data',function(req,res){
    console.log(req.body);
    var decode=verify(req.body.token,secret);
    console.log(decode);
    res.json({ok:true,data:data});
})

router.get('/',function(req,res){
    res.send(user);
});

module.exports = router;
