'use strict';

/**
 * @ngdoc overview
 * @name gpTestApp
 * @description
 * # gpTestApp
 *
 * Main module of the application.
 */
angular
  .module('gpTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'/*,
        controller: 'MainCtrl',
        controllerAs: 'main'*/
      })
      .otherwise({
        redirectTo: '/'
      });
  });
