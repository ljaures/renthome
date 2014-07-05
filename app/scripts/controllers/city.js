'use strict';

/**
 * @ngdoc function
 * @name renthomeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the renthomeApp
 */
angular.module('renthomeApp')
	.controller('CityCtrl', function (appService, $scope, $routeParams, $firebase) {

	$scope.city = $routeParams.city;

		var ref = new Firebase(appService.fbURI+"/homes");
		var homes = $firebase(ref);

		homes.$bind($scope, 'homes').then(function(){
			var keys = $scope.homes.$getIndex();

			var filteredHomes = [];

			angular.forEach(keys, function(key) {
				var home = $scope.homes[key];
				
				if (home.city == $scope.city)
					filteredHomes.push(_.extend({}, home, {id: key}));
			});

			$scope.filteredHomes = filteredHomes;
		});


});