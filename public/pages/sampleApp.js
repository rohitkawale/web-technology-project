

var sampleApp = angular.module('sampleApp',
    [
        'ngRoute',
        'm1',
    ]);

sampleApp.config(function ($routeProvider) {
    $routeProvider
        .when("/m1", {
            templateUrl: 'pages/m1/view.html',
            controller: 'm1SampleCtrl'
        })
        .when("/login", {
            templateUrl: 'pages/login.html',
            controller: 'loginCtrl'
        })
        .when("/home", {
            templateUrl: 'pages/home.html',
            controller: 'sampleCtrl'
        })
        .when("/signup", {
            templateUrl: 'pages/signup.html',
            controller: 'signupCtrl'
        })
        .otherwise({
            templateUrl: 'pages/home.html',
            controller: 'sampleCtrl'
        })
        ;

});
//var self;
sampleApp.service('api',function ($http) {
    // sample http api POST request
    var self =this
    this.sampleHttpApiCallGet = function (jsonData,next){
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "/api/sample",
            "method": "POST",
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
                "cache-control": "no-cache",
            },
            "params": (jsonData)
        };
        $http(settings).success(function (response) {
            console.log(response);
            if(response.ok){
                next();
            }else{
                alert("Error");
            }
        });
    };
//////////signup function
    this.signup=function(user){
        console.log("inside service");

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "/api/signup",
            "method": "POST",
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
                "cache-control": "no-cache",
            },
            //"data": $.param(user)
            "data": $.param(user)
        };
        $http(settings).success(function (response) {
            console.log(response);
            if(response.ok){
                alert("success");
            }else{
                alert("Error");
            }
        });
    }



    this.login=function(user){
        console.log("inside service");
        




        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "/api/login",
            "method": "POST",
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
                "cache-control": "no-cache",
            },
            "data": $.param(user)
        };
        $http(settings).success(function (response) {
            console.log(response);
            console.log(response.token);
            self.token = response.token ;
            localStorage.setItem('token',response.token)
            if(response.ok){
                alert("success");
            }else{
                alert("Error");
            }
        });
    }




     this.sampleHttpApiCallPost = function (jsonData,next){
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "/api/sample",
            "method": "POST",
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
                "cache-control": "no-cache",
            },
            "data": $.param(jsonData)
        };
        $http(settings).success(function (response) {
            console.log(response);
            if(response.ok){
                alert("success");
            }else{
                alert("Error");
            }
        });
    };
});

sampleApp.controller('sampleCtrl', sampleCtrl);
//sampleApp.controller('nCtrl', nCtrl);
sampleApp.controller('signupCtrl',signupCtrl);
sampleApp.controller('loginCtrl',loginCtrl);

function sampleCtrl($scope,api){
    $scope.sample = "Sample Controller module Home";

}
function signupCtrl($scope,api){
    $scope.sample = "new page new module new ctrl";
    $scope.meth1=function(user){
        console.log(user);
        $scope.status='registered';
        api.signup(user);


    }
}
function loginCtrl($scope,api){
    $scope.sample = "new page new module new ctrl";
    $scope.meth2=function(x){
        //$scope.status='logged in';
        api.login(x);
    }
}