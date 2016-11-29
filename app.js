angular.module('myApp',['satellizer'])
.config(function($authProvider){
	$authProvider.facebook({
      	clientId: '1808097422805431',
      	url: 'http://localhost:8000/auth/facebook'
    });
});