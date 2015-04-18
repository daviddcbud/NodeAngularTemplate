var angularModule='app';


angular.module(angularModule,['ngRoute','ngAnimate']);



angular.module(angularModule).config(['$routeProvider',
'$locationProvider', function($routeProvider, $locationProvider)
{
	$locationProvider.html5Mode({enabled:true, requireBase:false});
	$routeProvider.otherwise(
		{
		templateUrl:'/views/index.html'
		}
		
		
			
		
	);
}]);

angular.module(angularModule).controller('ShellController',[
	'$scope', function($scope) {
		$scope.title='hello';
	}
]);
