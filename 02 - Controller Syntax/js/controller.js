var app = angular.module('myApp', []);
app.controller('bookCtrl', function($scope){
    $scope.title = "Poetics II: On Comedy";
    $scope.author = "Aristotle";
    $scope.year = "328 BC";
});