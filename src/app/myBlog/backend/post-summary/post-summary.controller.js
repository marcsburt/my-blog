function PostSummaryController(AddRemoveService, BlogService, NgTableParams, $state, $window){
	var ctrl = this;
	ctrl.$onInit = function() {
		ctrl.tableParams = new NgTableParams({}, {
			dataset: ctrl.posts
		})
	}
	ctrl.selectPostEdit = function(postId){
		console.log(postId);
		$state.go('edit', {
			id: postId
		})
	}
	ctrl.deletePost = function(post){
		console.log(post)
		var message = 'Do you really want to delete ' + post +'from posts?';
		var pickedPost = BlogService.getPostById(post);
		if($window.confirm(message)){
			return AddRemoveService
				.deletePost(pickedPost)
				.then(function(){
					$state.go($state.current, {}, {reload: true});
				})
		}
	}
}

angular
	.module('myBlog')
	.controller('PostSummaryController', PostSummaryController)