var app = angular.module('myApp', []);
app.controller('bookCtrl', function($scope) {
	this.title = "Poetics II: On Comedy";
	this.author = "Aristotle";
	this.year = "-328";

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
 