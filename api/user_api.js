/**
 * Created by Omkar Dusane on 25-Feb-16.
 */
var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();

var conn = require('./config/connect.js');
var db = conn.get();
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
    console.log("here#######################################");
    //console.log(conn.get().collection('users'));
    console.log(db.collection);
    console.log("########################################")
    console.log(db.users.find({name:'ankita'}));
    console.log("#######################################")
    console.log(db.collection);
    console.log("#############")
    console.log(req.body);

    //res.ok=true;
    //user.ok=true;
    res.json({ok:true,user:user});
    //f['name'] = 1;
    /*db.area.find({},f).toArray(function(err, docs) {
        res.json({ok:true,list:docs});
    });*/
});
/*router.post('/login',function(req,res){
    console.log(req.query);
    conn
});*/

/******************** sample ****************/

router.get('/',function(req,res){
    res.send(user);
});

module.exports = router;
