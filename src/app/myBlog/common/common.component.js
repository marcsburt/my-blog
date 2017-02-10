var common = {
	templateUrl: './common.html',
	controller: 'CommonController'
}

angular
	.module('myBlog')
	.component('common', common)
	.config(function ($stateProvider, $locationProvider){

		$stateProvider
			.state('common', {
				url: '/common',
				component: 'common'
			})
	});