function SinglePostController($location, $stateParams, BlogService){
	var ctrl = this;
	ctrl.singlePost = {};
	
	ctrl.singlePost = BlogService.getPostById($stateParams.id);
	ctrl.currentUrl = $location.absUrl();
	ctrl.shared = function(){
		ctrl.singlePost.shared += 1;
		return BlogService.updatePost(ctrl.singlePost);
	}


}

angular
	.module('myBlog')
	.controller('SinglePostController', SinglePostController)