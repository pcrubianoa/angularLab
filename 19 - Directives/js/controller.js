angular.module("customDirective", [])
.directive('backImg', function(){
	return function(scope, element, attrs){
		attrs.$observe('backImg', function(value){
			element.css({
				"background": "url("+value+")",
				"background-size": "cover",
				"background-position": "center" 
			});
		});
	}
})
.controller("customController", function ($scope, $http) {
	$http.get("https://api.github.com/users/pcrubianoa/repos")
	.then(function(data){
		$scope.repos = data.data;
		console.log(data);
	})
});