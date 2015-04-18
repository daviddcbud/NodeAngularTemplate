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
