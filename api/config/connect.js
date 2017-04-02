//node --use_strict;
var mongoose = require('mongoose');
var mrl = 'mongodb://127.0.0.1:27017/test_1';
var db = false;
//let databaseConnection = false;
var user;
function connectNow(next){
    mongoose.connect(mrl);
    db = mongoose.connection ;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        // we're connected!
        databaseConnection = {};
        databaseConnection.users = db.collection('users');
        databaseConnection.area = db.collection('area');
        databaseConnection.constants = {sample:'hello'};
        //console.log('got db connection: ',(databaseConnection!=false));
        //console.log('db users:',mongoose.connection.db.collection('users').find());
        mongoose.connection.db.collection('userCollection').insert({
 // username: 'user1',
  //firstName: 'Steve',
  //lastName: 'LastName', 
});
        //console.log("inseerted");
        /*mongoose.connection.db.collection('userCollection').update(
  {someFilterProperty: true},
  {$set: {
     siteId: new mongoose.mongo.ObjectId('56cb91bdc5946f14678934ba'),
     hasNewSiteId: true}},
  {multi: true});
});*/


        next();
    });
};
function mockConnect(next){
    console.log("connected")
    user={name:'rohit'};
    next();
}

module.exports = {
  connect: mockConnect,
  get : ()=>{
    return user
  }
} ;
