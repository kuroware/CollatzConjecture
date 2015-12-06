<html ng-app="app">
	<head>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
		<link rel="stylesheet" href="/bower_components/angular-chart.js/dist/angular-chart.css">
	</head>
	<body>
		<div class="row">
			<div class="container-fluid">
				<div ng-view>
				</div>
			</div>
		</div>
	</body>
</html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
<script src="/bower_components/angular-route/angular-route.js"></script>
<script src="/app/components/collatz/collatzModule.js"></script>
<script src="/app/components/collatz/collatzFactory.js"></script>
<script src="/app/components/collatz/collatzController.js"></script>	
<script src="/bower_components/Chart.js/Chart.min.js"></script>
<script src="/app/app.module.js"></script>
<script src="/app/app.routes.js"></script>
<script src="/bower_components/angular-chart.js/dist/angular-chart.js"></script>