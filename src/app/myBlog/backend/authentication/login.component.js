var login ={
		templateUrl: './login.html',
		controller: 'LoginController'
}

angular
	.module('myBlog')
	.component('login', login)
	.config(function ($stateProvider){
		$stateProvider
			.state('auth', {
				redirectTo: 'auth.login',
				url: '/auth',
				template: '<div ui-view></div>'
			})
			.state('auth.login', {
				url: '/login',
				component: 'login'
			});
	});