var app = angular.module('myApp', []);
app.controller('bookCtrl', function($scope) {	
	this.title = "";
	this.author = "";
	this.year = "";
	this.books = [{title: "Poetics II: On Comedy", author: "Aristotle", year: "-328"},
				  {title: "Ab Urbe Condita (complete)", author: "Livy", year: "-26"},
				  {title: "On Nature", author: "Parmenides", year: "-500"},
				  {title: "De Paradiso", author: "Tertullian", year: "220"},
				  {title: "De carne et anima", author: "Tertullian", year: "221"}];

	this.getYear = function() {
		if (jQuery.isNumeric(this.year)) {
			if (this.year < 0) {
				return "" + -this.year + " BC";
			} else {
				return "" + this.year + " AD";
			}
		} else {
			return "";
		}
	};
	
	this.addBook = function() {
		this.books.push({title: this.title, author: this.author, year: this.year});
		this.title = "";
		this.author = "";
		this.year = "";
	};
});


app.controller('tabCtrl', function($scope, $window) {
	this.tab = 1;

	this.setTab = function(tabId) {
		this.tab = tabId;
	};

	this.isSet = function(tabId) {
		return this.tab === tabId;
	};
	
});

app.filter('BCifier', function() {
	return function(input) {
		if (jQuery.isNumeric(input)) {
			if (input < 0) {
				return "" + -input + " BC";
			} else {
				return "" + input + " AD";
			}
		} else {
			return "";
		}
	};
});

