var contactMe = {
	templateUrl: './contact-me.html',
	controller: 'ContactMeController'
}

angular
	.module('myBlog')
	.component('contactMe', contactMe)
	.config(function ($stateProvider){
		$stateProvider
			.state('contactme', {
				parent: 'common',
				url: '/contactme',
				component: 'contactMe',
			});
	});