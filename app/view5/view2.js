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
        var blob = $scope.dataToBlob(dataurl);

        ref.put(blob).then(function (snapshot) {
          console.log('Uploaded a blob or file!');
          $scope.load();
        });
      }

      $scope.dataToBlob = function (dataurl) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
      }
    }]);