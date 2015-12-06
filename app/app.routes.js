(function() {
	angular 
		.module('app')
		.config(routeConfig);
	routeConfig.$inject = ['$locationProvider', '$routeProvider'];
	function routeConfig($locationProvider, $routeProvider) {
		$routeProvider
			.when('/collatz', {
				templateUrl: '/app/components/collatz/collatz.html',
				controller: 'collatzController',
				controllerAs: 'vm'
			})
			.otherwise({
				redirectTo: '/404'
			});
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
	}
})();