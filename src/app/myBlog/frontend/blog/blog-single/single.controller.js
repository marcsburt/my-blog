function SinglePostController($location, $stateParams, BlogService){
	var ctrl = this;
	ctrl.$onInit = function() {
		ctrl.singlePost = {}; // get post as entire object
		ctrl.singlePost = BlogService.getPostById($stateParams.id); //get key
		ctrl.comment = {
			name: '',
			email: '',
			message: '',
			reviewed: false,
			date: new Date().getTime()
		};
	}
	

	ctrl.currentUrl = $location.absUrl();  //get current location to share
	//add 1 to share in backend - is monitored until we get google analytics up and running
	ctrl.shared = function() {
		ctrl.singlePost.allow_restrict.shared += 1;
		return BlogService
			.updatePost(ctrl.singlePost);
	}
	ctrl.addComment = function(){
		var comment = ctrl.comment;
		ctrl.comment = {};
		return BlogService
			.createNewComment(ctrl.singlePost.$id, comment)
	}

}

angular
	.module('myBlog')
	.controller('SinglePostController', SinglePostController)