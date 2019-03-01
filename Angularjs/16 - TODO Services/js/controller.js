angular.module("ToDoList", ["LocalStorageModule"])
	.service('ToDoService', function (localStorageService) {
		
		this.key = "angular-todolist";

		if (localStorageService.get(this.key)) {
			this.activities = localStorageService.get(this.key);
		} else {
			this.activities = [];
		}

		this.add = function (newActv) {
			this.activities.push(newActv);
			this.updateLocalStorage();
		};

		this.updateLocalStorage = function () {
			localStorageService.set(this.key, this.activities);
		};

		this.clean = function () {
			this.activities = [];
			this.updateLocalStorage();
			return this.getAll();
		};

		this.getAll = function () {
			return this.activities;
		};

		this.removeItem = function (item) {
			this.activities = this.activities.filter(function (activity) {
				return activity !== item;
			});
			this.updateLocalStorage();
			return this.getAll();
			// [{},{}] --> todoService.activities; itera con cada uno y el que de falso lo borro
		};
	})
	.controller("ToDoController", function ($scope, ToDoService) {
		$scope.todo = ToDoService.getAll();
		$scope.newActv = {};
		$scope.addActv = function () {
			ToDoService.add($scope.newActv);
			$scope.newActv = {};
		}

		$scope.removeActv = function (item) {
			$scope.todo = ToDoService.removeItem(item);
		}

		$scope.clean = function () {
			debugger;
			$scope.todo = ToDoService.clean();
		}
	});