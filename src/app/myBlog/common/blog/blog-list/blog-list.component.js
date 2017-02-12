var blogList = {
	bindings: {
		blogList: '<'
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
					blogList: 'resolvePosts'
				},
				resolve:{
					resolvePosts: function(BlogService){
						return BlogService.getPosts();
					}
				}
			});
	});