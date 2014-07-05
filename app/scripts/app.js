'use strict';

/**
 * @ngdoc overview
 * @name renthomeApp
 * @description
 * # renthomeApp
 *
 * Main module of the application.
 */
angular
  .module('renthomeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html'
      })
      .when('/:city', {
        templateUrl: 'views/city.html',
        controller: 'CityCtrl'
      })
      .when('/:city/appart/:id', {
        templateUrl: 'views/appart.html',
        controller: 'AppartCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
