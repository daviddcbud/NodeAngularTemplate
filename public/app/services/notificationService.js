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
