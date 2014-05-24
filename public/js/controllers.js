'use strict';

/* Controllers */

function ConnectCtrl($scope, ServiceA, ServiceB) {
	$scope.$on('event:google-plus-signin-success', function (event,authResult) {
		gapi.auth.setToken(authResult); // Den zurückgegebenen Token speichern.
		gapi.client.load('oauth2', 'v2', function() {
		  var request = gapi.client.oauth2.userinfo.get();
		  request.execute(function(obj) {
			$scope.profile=obj
			$scope.$digest()
		  });
		});
		console.log('hallo ');
	});
}
