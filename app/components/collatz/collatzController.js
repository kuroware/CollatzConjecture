(function() {
	angular 
		.module('collatz.app')
		.controller('collatzController', collatzController);
	collatzController.$inject = ['$scope', 'collatzFactory'];
	function collatzController($scope, collatzFactory) {
		var vm = this;
		vm.collatz_number = 10; //By default
		vm.chart_labels = [0, 1, 2, 3, 4, 5, 6];
		vm.chart_data = [[
			10, 5, 16, 8, 4, 2, 1]
		];
		vm.max_hailstone = 16;
		vm.chart_options = {
			bezierCurve : false,
	        scaleOverride : true,
	        scaleSteps: 15,
	        scaleStepWidth : Math.ceil(vm.max_hailstone/15),
	        scaleStartValue : 1
		};
		vm.series = ['Collatz - 10'];

		$scope.$watch('vm.collatz_number', function(newValue, oldValue) {
			console.log(newValue);
			if (parseInt(newValue) != 'NaN' && parseInt(newValue) >= 1) {
				console.log(newValue);
				collatz(parseInt(newValue));
			}
		})

		function collatz(collatz_number) {
			var data = collatzFactory(vm.collatz_number);
			vm.chart_series = data[0];
			vm.chart_labels = data[1];
			vm.chart_data = data[2];
			vm.max_hailstone = data[3];
			vm.chart_options.scaleStepWidth = Math.ceil(vm.max_hailstone/15);
		}
	}
})();