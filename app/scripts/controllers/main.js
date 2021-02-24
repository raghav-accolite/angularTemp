'use strict';

/**
 * @ngdoc function
 * @name tempApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tempApp
 */
angular.module('tempApp')
  .controller('MainCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http({
      method: 'GET',
      url: "http://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=b90becb725d14144a04558f5526a665b"
      }).then(
      function(resp){
        $scope.newsList=angular.fromJson(resp.data.articles);
   
      },
      function(error){
        console.log(error);
      }
    )
    
  });
