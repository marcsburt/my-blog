function LoginController (AuthService, $state){
	var ctrl = this;
	ctrl.error = null;
	ctrl.user = {
		email: '',
		password: ''
	};

	ctrl.loginUser = function (user) {
		return AuthService
			.login(user)
			.then(function(user){
				console.log('I think that I am logged in');
				console.log(user)
				// $state.go('common'); let's go to backend area
			}, function(reason){
				ctrl.error = reason.message;
			});
	};

	ctrl.submitForm = function(){
		ctrl.loginUser(ctrl.user);
	}
}

angular
	.module('myBlog')
	.controller('LoginController', LoginController)