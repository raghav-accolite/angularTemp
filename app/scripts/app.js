'use strict';

/**
 * @ngdoc overview
 * @name tempApp
 * @description
 * # tempApp
 *
 * Main module of the application.
 */
angular
  .module('tempApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
      .state("home", {
        url:"/home",
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state("about", {
        url:"/about",
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      });
  });
