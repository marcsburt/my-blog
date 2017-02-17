var postNew = {
	templateUrl: './post-new.html',
	controller: 'PostNewController'

}

angular
	.module('myBlog')
	.component('postNew', postNew)
	.config(function ($stateProvider){
		$stateProvider
			.state('new', {
				parent: 'backend',
				url: '/new',
				component: 'postNew',
			});
	});