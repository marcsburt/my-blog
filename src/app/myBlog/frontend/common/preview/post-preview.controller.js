function BlogPostController(BlogService, $timeout) {
	var ctrl = this;
	ctrl.$onInit = function (){
		ctrl.posts = ctrl.postData
		ctrl.userSearch = '';
		ctrl.search = '';
	}
	ctrl.searchForPost = function(){
		ctrl.search = ctrl.userSearch
		ctrl.userSearch = ''
	}
	ctrl.searchReset  = function(){
		ctrl.search = '';
	}

}

angular
	.module('myBlog')
	.controller('BlogPostController', BlogPostController)