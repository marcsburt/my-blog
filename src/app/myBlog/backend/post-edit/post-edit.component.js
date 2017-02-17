var postEdit = {
	bindings:{
		post: '<'
	},
	templateUrl: './post-edit.html',
	controller: 'PostEditController'

}

angular
	.module('myBlog')
	.component('postEdit', postEdit)
	.config(function ($stateProvider){
		$stateProvider
			.state('edit', {
				parent: 'backend',
				url: '/edit/:id',
				component: 'postEdit',
				resolve: {
				  post: function ($transition$, BlogService) {
				    var key = $transition$.params().id;
				    return BlogService.getPostById(key).$loaded();
				  }
				}
			});
	});