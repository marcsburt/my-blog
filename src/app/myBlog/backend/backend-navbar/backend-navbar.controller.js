function BackendNavController(AuthService, $state){

	var ctrl = this;
	ctrl.loggedUser = AuthService.getUser();
	ctrl.onLogout = function(){
		AuthService.logout().then(function(){
			$state.go('auth.login');
		})
	}

}




angular
	.module('myBlog')
	.controller('BackendNavController', BackendNavController)