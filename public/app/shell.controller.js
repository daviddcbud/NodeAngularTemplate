angular.module(angularModule).controller('ShellController',[
	'$scope','$http','notifications',
	 function($scope,$http,notifications) {
		$scope.model={};
		
		notifications.success('we made it');
		$http.get('/api/Books').success(function(data){
			$scope.model.books=data;
		});
		
		$http.get('/api/photo').success(function(data){
			$scope.photo=data;
		});
		
	}
]);
