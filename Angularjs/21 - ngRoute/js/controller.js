angular.module("CustomDirective")

.controller('ReposController', function ($scope, $http) {
	$scope.repos = [];

	$http.get("https://api.github.com/users/twitter/repos")
	.then(function (data) {
		$scope.posts = data.data;
		for (var i = data.length - 1; i >= 0; i--) {
			var repo = data[i];
			$scope.repos.push(repo.name);
		}
	});

	$scope.optionSelected = function (data) {
		$scope.$apply(function () {
			$scope.main_repo = data;
		})
	}
})

.controller('RepoController', function ($scope, $http, $routeParams) {
	$scope.repo = {};
	$http.get("https://api.github.com/repos/twitter/"+$routeParams.name)
	.then(function (data) {
		$scope.repo = data.data;
	});
})