'use strict';

angular.module('myApp.view5', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/signature', {
    templateUrl: 'view5/view2.html',
    controller: 'View5Ctrl'
  });
}])

.controller('View5Ctrl', [function() {

}]);