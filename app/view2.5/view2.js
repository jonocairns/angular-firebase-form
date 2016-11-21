'use strict';

angular.module('myApp.view25', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/personal-details', {
    templateUrl: 'view2.5/view2.html',
    controller: 'View25Ctrl'
  });
}])

.controller('View25Ctrl', ["$scope", "$firebaseObject",
  function ($scope, $firebaseObject) {

    var ref = firebase.database().ref().child("data");
    // download the data into a local object
    var syncObject = $firebaseObject(ref);


    syncObject.$bindTo($scope, "data");
  }
]);