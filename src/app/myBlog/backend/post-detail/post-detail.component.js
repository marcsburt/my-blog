var postDetail = {
	bindings: {
		post: '<',
		onSave: '&',
		onDelete: '&',
		onUpdate: '&',
		onPreview: '&'
	},
	templateUrl: './post-detail.html',
	controller: 'PostDetailController'
}

angular
	.module('myBlog')
	.component('postDetail', postDetail)
