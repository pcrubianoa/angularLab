angular.module("customDirective", [])

.controller("customController", function ($scope, $http) {
	$http.get("https://randomuser.me/api/")
	.then(function(data){
		$scope.repos = data.data.results[0].picture.large;
		console.log(data.data);
	})
});