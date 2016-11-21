'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/employer-details', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ["$scope", "$firebaseObject",
  function ($scope, $firebaseObject) {

    var ref = firebase.database().ref().child("data");
    // download the data into a local object
    var syncObject = $firebaseObject(ref);


    syncObject.$bindTo($scope, "data");
  }
]);