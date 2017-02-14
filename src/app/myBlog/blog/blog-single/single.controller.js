function SinglePostController($stateParams, BlogService){
	var ctrl = this;
	ctrl.singlePost = {};
	
	ctrl.singlePost = BlogService.getPostById($stateParams.id);


}

angular
	.module('myBlog')
	.controller('SinglePostController', SinglePostController)