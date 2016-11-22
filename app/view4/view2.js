'use strict';

angular.module('myApp.view4', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/identity', {
      templateUrl: 'view4/view2.html',
      controller: 'View4Ctrl'
    });
  }])

  .controller('View4Ctrl', ["$scope", "$firebaseObject", "$timeout",
    function ($scope, $firebaseObject, $timeout) {
      var ref = firebase.storage().ref().child("id.jpg");
      // download the data into a local object

      $scope.load = function () {
        ref.getDownloadURL().then(function (url) {

          $timeout(function () {
            $scope.existingFile = url;
          }, 1);
          console.log(url);
        }).catch(function (error) {
          // Handle any errors
        });
      }

      $scope.load();


      $scope.upload = function () {
        ref.put($scope.files).then(function (snapshot) {
          console.log('Uploaded a blob or file!');
          $scope.load();
        });
      }


    }]);