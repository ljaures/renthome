"use strict";angular.module("renthomeApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","firebase"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/city.html",controller:"CityCtrl"}).when("/appart/:id",{templateUrl:"views/appart.html",controller:"AppartCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("renthomeApp").controller("AuthCtrl",["appService","$scope","$location",function(a,b,c){b.connection={email:"",password:""},b.$on("user",function(){b.user=a.user}),b.login=function(){a.login(b.connection.email,b.connection.password)},b.logout=function(){a.logout()},b.isActive=function(a){return c.path().substr(0,a.length)==a}}]),angular.module("renthomeApp").controller("CityCtrl",["appService","$scope","$firebase",function(a,b,c){var d=new Firebase(a.fbURI+"/homes");b.homes=c(d)}]),angular.module("renthomeApp").controller("AppartCtrl",["$scope","$routeParams","$firebase","appService",function(a,b,c,d){var e=b.id,f=new Firebase(d.fbURI+"/homes/"+e);a.params=b,a.home=c(f),a.book=function(a){if(!_.isUndefined(d.user)&&null!==d.user){var b=new Firebase("https://renthome123.firebaseio.com/homes/"+e+"/weeks/"+a),f=c(b);f.$update({booking:{by:d.user.id,at:+new Date}},function(){alert("Merci de la réservation")})}},a.unbook=function(a){var b=new Firebase("https://renthome123.firebaseio.com/homes/"+e+"/weeks/"+a),d=c(b);d.$update({booking:null},function(){alert("Réservation annulée")})}}]),angular.module("renthomeApp").factory("appService",["$rootScope",function(a){var b=function(){};b.prototype.fbURI="https://renthome123.firebaseio.com";var c=new Firebase(b.prototype.fbURI),d=new FirebaseSimpleLogin(c,function(c,d){c?alert(c):(b.prototype.user=d,a.user=d,a.$broadcast("user"))});return b.prototype.login=function(a,b){d.login("password",{email:a,password:b})},b.prototype.logout=function(){d.logout()},new b}]),angular.module("renthomeApp").filter("ucfirst",function(){return function(a){return a.charAt(0).toUpperCase()+a.slice(1)}});