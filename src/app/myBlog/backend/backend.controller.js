function BackendController(AuthService){
	var ctrl = this;
	ctrl.user = AuthService.getUser();
}

angular
	.module('myBlog')
	.controller('BackendController', BackendController)