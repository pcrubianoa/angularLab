angular.module("customDirective", [])

.controller("customController", function ($scope, $http) {
	$http.get("https://api.github.com/users/pcrubianoa/repos")
	.then(function(data){
		$scope.repos = data.data;
		console.log(data);
	})
});