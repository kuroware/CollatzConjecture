(function() {
	//Produces the points for the collatz conjecture, iteratively
	angular
		.module('collatz.app')
		.factory('collatzFactory', collatzFactory);
	function collatzFactory() {
		return function(startingPoint) {
				var values = [];
				var labels = [];
				var x = 0;
				var series = ['Collatz - ' + startingPoint];
				var max_hailstone = 0;
				console.log(startingPoint);
				values.push(startingPoint);
				labels.push(x);
				while (values[values.length - 1] != 1) {
					console.log(values);
					//Get the current element
					currentPoint = values[values.length - 1];
					if (currentPoint % 2 == 0) {
						//Even, divide by 2 and push
						values.push(currentPoint/2);
						labels.push(x);
					}
					else {
						values.push(currentPoint*3 + 1);
						labels.push(x);
					}
					if (currentPoint > max_hailstone) {
						max_hailstone = currentPoint;
					}
					x++;
				}
				return [series, labels, [values], max_hailstone]
			}
		}
})();