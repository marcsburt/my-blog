var singlePost = {

	templateUrl: './single.html',
	controller: 'SinglePostController'
	
}

angular
	.module('myBlog')
	.component('singlePost', singlePost)
	.config(function ($stateProvider){
		$stateProvider
			.state('singlepost', {
				parent: 'common',
				url: '/singlepost/{id}',
				component: 'singlePost'
			});
	});