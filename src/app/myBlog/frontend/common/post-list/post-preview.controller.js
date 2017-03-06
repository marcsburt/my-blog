function BlogPostController() {
	var ctrl = this;
	ctrl.$onInit = function (){
		ctrl.posts = ctrl.postData
	}
}

angular
	.module('myBlog')
	.controller('BlogPostController', BlogPostController)