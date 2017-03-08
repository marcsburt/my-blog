function PostPopoverController(BlogService, $location) {
	var ctrl = this;
	ctrl.$onInit = function (){
		ctrl.post = BlogService.getPostById(ctrl.post.$id); //get key
		ctrl.comments = BlogService.getAllComments(ctrl.post.$id); //get comments
		ctrl.comments.$loaded().then(function(comments){
			ctrl.count = comments.length
		})
		ctrl.popoverShare = {
			templateUrl: './share-popover.html'
		};
		ctrl.buttonDisabled = false;

	}

	ctrl.currentUrl = $location.absUrl();  //get current location to share
	//add 1 to share in backend - is monitored until we get google analytics up and running
	ctrl.shared = function() {
		ctrl.post.allow_restrict.shared += 1;
		return BlogService
			.updatePost(ctrl.post);
	}

	ctrl.upvoted = function(){
		ctrl.post.allow_restrict.upvoted += 1;
		ctrl.buttonDisabled = true
		return BlogService
			.updatePost(ctrl.post);
	}


	
}

angular
	.module('myBlog')
	.controller('PostPopoverController', PostPopoverController)