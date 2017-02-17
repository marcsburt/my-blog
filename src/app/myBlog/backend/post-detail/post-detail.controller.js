function PostDetailController(){
	var ctrl = this;
	ctrl.$onInit = function () {
	  ctrl.isNewPost = !ctrl.post.$id;
	};
	ctrl.savePost = function () {
		console.log('adding post')
	  ctrl.onSave({
	    $event: {
	      post: ctrl.post
	    }
	  });
	};
}

angular
	.module('myBlog')
	.controller('PostDetailController', PostDetailController)