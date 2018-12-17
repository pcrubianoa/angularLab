var app = angular.module('myApp', []);
app.controller('bookCtrl', function($scope) {
	$scope.title = "Poetics II: On Comedy";
	$scope.author = "Aristotle";
	$scope.year = "-328";
	
	this.getYear = function( ) {
	    if (jQuery.isNumeric($scope.year)) {
	        if ($scope.year < 0) {
	        	return "" + -$scope.year + " BC";
	        } else {
	            return "" + $scope.year + " AD";
	        }
	    } else {
	        return "";
	    }
	};	
});
