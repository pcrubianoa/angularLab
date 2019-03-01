var app = angular.module('myApp', []);
app.controller('FiltersController', function($scope) {	
	$scope.html = "<p>Html text</p>";
});

app.filter('removeHtml', function() {
	return function(text) {
		return String(text).replace(/<[^>]+>/gm, '');
	};
});

