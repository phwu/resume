var resumeApp = angular.module('resumeApp', []);

	resumeApp.controller('ResumeCtrl', function($scope, $http) {
		//var experience = [];
		$http.get('polly.json')
		.success(function(data) {
			$scope.resume = data;
			//experience = data.experience;
		})
		.error(function(data) {
			//err
		});

	});
