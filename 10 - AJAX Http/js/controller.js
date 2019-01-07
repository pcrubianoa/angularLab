angular.module('AJAXApp', [])
.controller('AJAXController', function($scope, $http) {
	$scope.posts = [];
	$scope.newPost = {};
    $http.get("https://jsonplaceholder.typicode.com/posts")
		.then(function (response) {
			console.log(response);
			$scope.posts = response.data;
		});
	$scope.addPost = function(){
		$http.post("https://jsonplaceholder.typicode.com/posts", {
			title: $scope.newPost.title,
			body: $scope.newPost.body,
			userId: 1
		})
		.then(function(data) {
			$scope.posts.push($scope.newPost);
			$scope.newPost = {};
		});
	}
});