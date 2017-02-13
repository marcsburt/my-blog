function BlogListController(){
	var ctrl = this;
	ctrl.$onInit = function (){
		ctrl.posts = ctrl.allPosts
	}
}



angular
	.module('myBlog')
	.controller('BlogListController', BlogListController)