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
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  //$locationProvider.hashPrefix('!');
   var config = {
    apiKey: "AIzaSyCIs9ZBO2T0k7nBv0qRkKq2-lOXowjWKws",
    authDomain: "cz-training-agre-1479345541933.firebaseapp.com",
    databaseURL: "https://cz-training-agre-1479345541933.firebaseio.com",
    storageBucket: "cz-training-agre-1479345541933.appspot.com",
    messagingSenderId: "128605872066"
  };
  firebase.initializeApp(config);
  $routeProvider.otherwise({redirectTo: '/employer-details'});
}]).controller('AppCtrl', AppCtrl);

function AppCtrl($scope) {
    $scope.currentNavItem = 'page1';
  }
