var app = angular.module('myApp', []);

app.run(function($rootScope) {	
	$rootScope.name = "Root Scope";
});

app.controller('ParentController', function($scope) {	
	$scope.name = "Scope name";
	setTimeout(function(){
		$scope.$apply(function(){
			$scope.name = "Updated Parent Scope";
		});
	}, 1000);
});

app.controller('ChildController', function($scope) {	

});