'use strict';

/**
 * @ngdoc function
 * @name renthomeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the renthomeApp
 */
angular.module('renthomeApp')
  .controller('AuthCtrl', function (appService, $scope, $location) {

  		//$scope.user = appService.user;

  		$scope.connection = {
  			email: '',
  			password: ''
  		};

		$scope.$on('user', function(){
			$scope.user = appService.user;
		});

		$scope.login = function(){
			appService.login($scope.connection.email, $scope.connection.password);
		};

		$scope.logout = function() {
			appService.logout();
		};

    $scope.isActive = function(route) {
      return $location.path().substr(0, route.length) == route;
    };
});