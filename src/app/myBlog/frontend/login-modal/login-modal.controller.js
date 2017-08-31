function LoginModalController(AuthService, $state) {
	var ctrl = this;
	ctrl.$onInit = function() {
		ctrl.error = null;
		ctrl.user = {
			email: '',
			password: ''
		};
	};

	ctrl.loginUser = function(user) {
		return AuthService
			.login(user)
			.then(function(user) {
				ctrl.ok();
				$state.go('backend');
			}, function(reason) {
				ctrl.error = reason.message;
			});
	};

	ctrl.submitForm = function() {
		console.log('logging in')
		ctrl.loginUser(ctrl.user);
	}

	ctrl.ok = function() {
    ctrl.close();
  };

  ctrl.cancel = function() {
    ctrl.dismiss();
  };
}

angular
	.module('myBlog')
	.controller('LoginModalController', LoginModalController)