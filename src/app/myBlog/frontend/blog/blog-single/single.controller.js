function SinglePostController($state, $stateParams, BlogService, AuthService){
	var ctrl = this;
	ctrl.$onInit = function() {
		ctrl.singlePost = {}; // get post as entire object
		ctrl.singlePost = BlogService.getPostById($stateParams.id); //get key
		}
}

angular
	.module('myBlog')
	.controller('SinglePostController', SinglePostController)