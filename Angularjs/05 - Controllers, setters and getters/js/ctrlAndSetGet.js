var app = angular.module('myApp', []);
app.controller('bookCtrl', function($scope) {
	$scope.title = "Poetics II: On Comedy";
	$scope.author = "Aristotle";
	$scope.year = "-328";
	
	$scope.getYear = function( ) {
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
	
	var _salutation = "";

	$scope.book = {
		salutation: function(newSal) {
			if (arguments.length == 0) {
				return _salutation;
			} else {
				_salutation = newSal.toUpperCase( );
			}
		}
	};

});
