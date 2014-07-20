'use strict';

/**
 * @ngdoc function
 * @name renthomeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the renthomeApp
 */
angular.module('renthomeApp')
	.controller('CityCtrl', function (appService, $scope, $firebase) {

		var ref = new Firebase(appService.fbURI+"/homes");
		$scope.homes = $firebase(ref);

});