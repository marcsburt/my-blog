var postSummary = {
	bindings:{
		posts: '<',
		display: '<'
	},
	templateUrl: './post-summary.html',
	controller: 'PostSummaryController'
}

angular
	.module('myBlog')
	.component('postSummary', postSummary)
	.config(function ($stateProvider){
		$stateProvider
			.state('summary', {
				parent: 'backend',
				url: '/summary',
				component: 'postSummary',
				resolve:{
					posts: function(BlogService){
						return BlogService.getAllPosts().$loaded();
					},
					display: function(BlogService){
						return BlogService.getAllPosts().$loaded();
					}
				}
			});
	});