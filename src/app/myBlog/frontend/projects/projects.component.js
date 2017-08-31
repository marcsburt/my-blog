var projects = {

	templateUrl: './projects.html',
	controller: 'ProjectsController'
}

angular
	.module('myBlog')
	.component('projects', projects)
	.config(function ($stateProvider){
		$stateProvider
			.state('projects', {
				parent: 'common',
				url: '/projects',
				component: 'projects'
			});
	});