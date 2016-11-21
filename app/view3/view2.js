'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/education', {
    templateUrl: 'view3/view2.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ["$scope", "$firebaseObject",
  function ($scope, $firebaseObject) {

    var ref = firebase.database().ref().child("data");
    // download the data into a local object
    var syncObject = $firebaseObject(ref);


    syncObject.$bindTo($scope, "data");
  }
]);