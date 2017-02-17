var postDetail = {
	bindings: {
		post: '<',
		onSave: '&',
		onDelete: '&',
		onUpdate: '&'
	},
	templateUrl: './post-detail.html',
	controller: 'PostDetailController'
}

angular
	.module('myBlog')
	.component('postDetail', postDetail)
