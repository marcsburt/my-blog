var aboutMe = {
	templateUrl: './about-me.html',
	controller: 'AboutMeController'
}

angular
	.module('myBlog')
	.component('aboutMe', aboutMe)
	.config(function ($stateProvider){
		$stateProvider
			.state('aboutme', {
				parent: 'common',
				url: '/aboutme',
				component: 'aboutMe'
			});
	});