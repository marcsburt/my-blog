var blogList = {
	bindings: {
		allPosts: '<'
	},
	templateUrl: './blog-list.html',
	controller: 'BlogListController'
}

angular
	.module('myBlog')
	.component('blogList', blogList)
	.config(function ($stateProvider){
		$stateProvider
			.state('bloglist', {
				parent: 'common',
				url: '/bloglist',
				component: 'blogList',
				bindings: {
					allPosts: 'resolvePosts'
				},
				resolve:{
					resolvePosts: function(BlogService){
						return BlogService.getAllPosts();
					}
				}
			});
	});