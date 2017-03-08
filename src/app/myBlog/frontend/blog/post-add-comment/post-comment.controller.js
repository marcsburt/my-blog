function PostMessageController($location, $stateParams, BlogService){
	var ctrl = this;
	ctrl.$onInit = function() {
		ctrl.post = ctrl.post; // get post as entire object
		ctrl.comment = {
			name: '',
			email: '',
			message: '',
			count: '',
			reviewed: false,
			date: new Date().getTime()
		};
		ctrl.buttonDisabled = false;
	}
	
	ctrl.addComment = function(){
		ctrl.buttonDisabled = true;
		var comment = ctrl.comment;
		ctrl.comment = {};
		return BlogService
			.createNewComment(ctrl.post.$id, comment)
	}

}

angular
	.module('myBlog')
	.controller('PostMessageController', PostMessageController)