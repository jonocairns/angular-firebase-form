'use strict';

angular.module('myApp.view4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/identity', {
    templateUrl: 'view4/view2.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl', [function() {

}]);