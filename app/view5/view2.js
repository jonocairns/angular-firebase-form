'use strict';

angular.module('myApp.view5', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/signature', {
      templateUrl: 'view5/view2.html',
      controller: 'View5Ctrl'
    });
  }])

  .controller('View5Ctrl', ["$scope", "$firebaseObject", "$timeout",
    function ($scope, $firebaseObject, $timeout) {
      var canvas = document.querySelector("canvas");
      var signaturePad = new SignaturePad(canvas);


      var ref = firebase.storage().ref().child("sig.jpg");

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
        var dataurl = signaturePad.toDataURL();
        var encoded = dataurl.split(",")[1];

        ref.putString(encoded, 'base64').then(function (snapshot) {
          console.log('Uploaded a blob or file!');
          $scope.load();
        });
      }

    }]);