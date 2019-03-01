var app = angular.module('JSONgetter', []);
app.controller('JSONCtrl', function($scope, $http) {
	$scope.date = "";
	$scope.time = "";

	$http.get("http://127.0.0.1:5500/09%20-%20get%20Json/data/date.json").then(function(response) {
		$scope.date = response.data.date;
		$scope.time = response.data.time;
	}, function(response) {
		$scope.date = "Error connecting to server";
	});
});

// {"date":"9/5","time":"3:40"}
