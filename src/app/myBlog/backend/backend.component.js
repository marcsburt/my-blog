var backend = {
	templateUrl: './backend.html'
}

angular
	.module('myBlog')
	.component('backend', backend)
	.config(function ($stateProvider){
		$stateProvider
			.state('backend', {
				redirectTo: 'manage',
				url: '/backend',
				data: {
					requiredAuth: true
				},
				component: 'backend'
			})
	});