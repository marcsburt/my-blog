var postMessage = {
	bindings: {
		post: '<'
	},
	templateUrl: './post-comment.html',
	controller: 'PostMessageController'
	
}

angular
	.module('myBlog')
	.component('postMessage', postMessage)