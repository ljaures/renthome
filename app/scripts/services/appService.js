'use strict';

angular.module('renthomeApp')
  .factory('appService', function ($rootScope) {

    var AppService = function () {};

  	AppService.prototype.fbURI = "https://renthome123.firebaseio.com";
  	var ref = new Firebase(AppService.prototype.fbURI);

	var auth = new FirebaseSimpleLogin(ref, function(error, firebaseUser) {
		if (error) {
			// an error occurred while attempting login
			alert(error);
		} else {
			AppService.prototype.user = firebaseUser;
			$rootScope.user = firebaseUser;
			$rootScope.$broadcast('user');
		}
	});

	AppService.prototype.login = function (email, password) {
		auth.login('password', {
			email: email,
			password: password
		});
	};

	AppService.prototype.logout = function() {
		auth.logout();
	};

	return new AppService();
});