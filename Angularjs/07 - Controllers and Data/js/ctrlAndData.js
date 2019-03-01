var app = angular.module('myApp', []);
app.controller('bookCtrl', function($scope) {
	this.title = "";
	this.author = "";
	this.year = "";
	this.books = [{title: "Poetics II: On Comedy", author: "Aristotle", year: "-328"}];

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


app.controller('tabCtrl', function($scope) {
	this.tab = 1;

	this.setTab = function(tabId) {
		this.tab = tabId;
	};

	this.isSet = function(tabId) {
		return this.tab === tabId;
	};
});
 