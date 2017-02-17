var backend = {

	templateUrl: './backend.html',
	controller: 'BackendController'
}

angular
	.module('myBlog')
	.component('backend', backend)
	.config(function ($stateProvider){
		$stateProvider
			.state('backend', {
				redirectTo: 'summary',
				url: '/backend',
				data: {
					requiredAuth: true
				},
				component: 'backend'
			})
	});