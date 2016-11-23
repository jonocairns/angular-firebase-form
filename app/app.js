'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view25',
  'myApp.view3',
  'myApp.view4',
  'myApp.view5',
  'myApp.view6',
  'myApp.version',
  'firebase',
  'ngMaterial',
  'ngAnimate',
  'ngFileUpload'
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    //$locationProvider.hashPrefix('!');
    var config = {
      apiKey: "AIzaSyCIs9ZBO2T0k7nBv0qRkKq2-lOXowjWKws",
      authDomain: "cz-training-agre-1479345541933.firebaseapp.com",
      databaseURL: "https://cz-training-agre-1479345541933.firebaseio.com",
      storageBucket: "cz-training-agre-1479345541933.appspot.com",
      messagingSenderId: "128605872066"
    };
    firebase.initializeApp(config);
    $routeProvider.otherwise({ redirectTo: '/employer-details' });
  }]).controller('AppCtrl', AppCtrl).controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log, $firebaseObject, $firebaseArray) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('right').close()
        .then(function () {
        });


    };

    $scope.determinateValue = 78;


    var ref = firebase.database().ref().child("messages").orderByChild("timestamp").limitToLast(7);
    var list = $firebaseArray(ref);

    $scope.messages = list;

    $scope.send = function () {

      list.$add({ text: $scope.message, timestamp: Date.now(), user: 'Terry' });
      $scope.message = '';
    }
  });


;

function AppCtrl($scope, $mdSidenav, $firebaseObject) {
  $scope.currentNavItem = 'page1';

  var lol = firebase.database().ref().child("data");
  var obj = $firebaseObject(lol);

  var compute = function() {
    var keys = Object.keys(obj);
    var cleanKeys = [];
    keys.forEach(function(key) {
      if(key.indexOf('$') === -1) {
        cleanKeys.push(key);
      }
    });
    
    var c = cleanKeys.length;
    var completed = 0;
    cleanKeys.forEach(function (v) {
      
      if (obj[v] === '' || typeof obj[v] === 'undefined' || obj[v] === null) {

      } else {
        completed++;
      }

    });
    $scope.determinateValue = Math.ceil((completed / c) * 100);
  }

  obj.$loaded().then(compute);

  obj.$watch(compute);

  $scope.toggleRight = function () {
    $mdSidenav('right')
      .toggle()
  }
}
