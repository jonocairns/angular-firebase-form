'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/trainee-details', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ["$scope", "$firebaseObject",
  function ($scope, $firebaseObject) {

    $scope.countries = ['New Zealand', 'Australia']
    var ref = firebase.database().ref().child("data");
    // download the data into a local object
    var syncObject = $firebaseObject(ref);


    syncObject.$bindTo($scope, "data");
  }
]);