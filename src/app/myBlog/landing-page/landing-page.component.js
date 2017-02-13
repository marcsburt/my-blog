var landingPage = {
	templateUrl: './landing-page.html',
	controller: 'LandingPageController'
}

angular
	.module('myBlog')
	.component('landingPage', landingPage)
	.config(function ($stateProvider){
		$stateProvider
			.state('landing', {
				url: '/landing',
				component: 'landingPage'
			});
	});