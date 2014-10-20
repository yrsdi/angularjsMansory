'use strict';

/**
 * @ngdoc overview
 * @name angularjsMansoryApp
 * @description
 * # angularjsMansoryApp
 *
 * Main module of the application.
 */
angular
  .module('angularjsMansoryApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
