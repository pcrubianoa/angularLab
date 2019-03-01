angular.module('todoList', ["LocalStorageModule"])
.controller('todoController', function($scope, localStorageService) {
	if (localStorageService.get("angular-todolist")){
		$scope.todo = localStorageService.get("angular-todolist");
	}else{
		$scope.todo = [];
	}
	/*
	{
		title: 'message',
		date: '15/05/2015'
	}
	*/

	$scope.$watch('todo', function(value, oldValue) {
    localStorageService.set("angular-todolist", $scope.todo);
	}, true);

	$scope.addActivity = function(){
		$scope.todo.push($scope.newActivity);
		$scope.newActivity = {};
	}
	
});