var manageBlog = {
	templateUrl: './manage-blog.html',
	controller: 'ManageBlogController'

}

angular
	.module('myBlog')
	.component('manageBlog', manageBlog)
	.config(function ($stateProvider){
		$stateProvider
			.state('manage', {
				parent: 'backend',
				url: '/manage',
				component: 'manageBlog',
			});
	});