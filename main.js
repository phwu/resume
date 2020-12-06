var resumeApp = angular.module('resumeApp', []);

resumeApp.controller('ResumeCtrl', function($scope, $http) {
	$http.get('https://api.pollyhwu.com/resume')
		.success(function(data) {
			$scope.resume = data;
		})
		.error(function(data) {
            //server is probs down
		});
});
