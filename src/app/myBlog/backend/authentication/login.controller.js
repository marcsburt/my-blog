function LoginController (AuthService, $state){
	var ctrl = this;
	ctrl.error = null;
	ctrl.userData = {
		email: '',
		password: ''
	};

	ctrl.loginUser = function (user) {
		return AuthService
			.login(user)
			.then(function(){
				console.log('I think that I am logged in')
				// $state.go('common');
			}, function(reason){
				ctrl.error = reason.message;
			});
	};

	ctrl.submitForm = function(){
		ctrl.userData = ctrl.user
		ctrl.loginUser(ctrl.userData);
	}
}

angular
	.module('myBlog')
	.controller('LoginController', LoginController)