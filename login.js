angular.module('myApp')
  	.controller('loginFB', function($scope, $auth) {

    $scope.authenticate = function(provider) {
      $auth.authenticate(provider);
    };
});