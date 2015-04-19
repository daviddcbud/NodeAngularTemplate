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
	'$scope','$http','notifications',
	 function($scope,$http,notifications) {
		$scope.model={};
		
		notifications.success('we made it');
		$http.get('/api/Books').success(function(data){
			$scope.model.books=data;
		});
		
		
	}
]);

angular.module(angularModule).service('notifications', function(){
	toastr.options.closeButton=true;
	
	this.info= function(msg){
		toastr.info(msg);
	};
	this.error= function(msg){
		toastr.error(msg);
	};
	this.warning=function(msg){
		toastr.warning(msg);
	};
	this.success=function(msg){
		toastr.success(msg);
	};
});
