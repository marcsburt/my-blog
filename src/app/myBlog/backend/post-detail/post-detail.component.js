var postDetail = {
	bindings: {
		post: '<',
		onSave: '&'
	},
	templateUrl: './post-detail.html',
	controller: 'PostDetailController'
}

angular
	.module('myBlog')
	.component('postDetail', postDetail)
