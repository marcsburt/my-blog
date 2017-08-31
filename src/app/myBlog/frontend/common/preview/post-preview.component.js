var blogPost = {
	bindings: {
		postData: '<'
	},
	templateUrl: './post-preview.html',
	controller: 'BlogPostController'
}

angular
	.module('myBlog')
	.component('blogPost', blogPost)