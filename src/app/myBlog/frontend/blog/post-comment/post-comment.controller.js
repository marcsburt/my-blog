function PostMessageController($location, $stateParams, BlogService){
	var ctrl = this;
	ctrl.$onInit = function() {
		ctrl.post = ctrl.post; // get post as entire object
		// ctrl.count = BlogService.getPostById
		ctrl.comment = {
			name: '',
			email: '',
			message: '',
			count: '',
			reviewed: false,
			date: new Date().getTime()
		};
	}
	

	ctrl.addComment = function(){
		var comment = ctrl.comment;
		ctrl.comment = {};
		return BlogService
			.createNewComment(ctrl.post.$id, comment)
	}

}

angular
	.module('myBlog')
	.controller('PostMessageController', PostMessageController)