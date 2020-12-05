var resumeApp = angular.module('resumeApp', []);

resumeApp.controller('ResumeCtrl', function($scope, $http) {
	$http.get('https://vw8krqdse3.execute-api.us-east-1.amazonaws.com/prod')
		.success(function(data) {
			$scope.resume = data;
		})
		.error(function(data) {
            //server is probs down
		});
});
