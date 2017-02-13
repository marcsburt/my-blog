var blogPost = {
	bindings: {
		postData: '<'
	},
	templateUrl: './blog-post.html',
	controller: 'BlogPostController'
}

angular
	.module('myBlog')
	.component('blogPost', blogPost)