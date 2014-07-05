'use strict';

/**
 * @ngdoc function
 * @name renthomeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the renthomeApp
 */
angular.module('renthomeApp')
  .controller('AppartCtrl', function ($scope, $routeParams, $firebase, appService) {

  		var id = $routeParams.id;
		var ref = new Firebase(appService.fbURI+"/homes/"+id);

		$scope.params = $routeParams;
		$scope.home = $firebase(ref);

		$scope.book = function (weekNum) {
			if (_.isUndefined(appService.user) || appService.user === null) return;


			var weekRef = new Firebase("https://renthome123.firebaseio.com/homes/"+id+"/weeks/"+weekNum);
			var week = $firebase(weekRef);

			week.$update({booking: { by: appService.user.id, at: +(new Date()) } }, function onComplete() {
				alert('Merci de la réservation');
			});
		};

		$scope.unbook = function (weekNum) {
			var weekRef = new Firebase("https://renthome123.firebaseio.com/homes/"+id+"/weeks/"+weekNum);
			var week = $firebase(weekRef);

			week.$update({booking: null}, function onComplete() {
				alert('Réservation annulée');
			});
		};
  });
