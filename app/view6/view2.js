'use strict';

angular.module('myApp.view6', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/checklist', {
      templateUrl: 'view6/view2.html',
      controller: 'View6Ctrl'
    });
  }])

  .controller('View6Ctrl', ["$scope", "$firebaseObject", "$timeout",
    function ($scope, $firebaseObject, $timeout) {

    }]);  