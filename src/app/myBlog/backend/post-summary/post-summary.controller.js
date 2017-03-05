function PostSummaryController(BlogService, NgTableParams, $state, $window) {
	var ctrl = this;
	ctrl.$onInit = function() {
	}
	
	ctrl.createNewPost = function(event) {
		var date = new D
		event.post.date = date;
		return BlogService
			.createNewPost(event.post)
			.then(function(post) {
				$state.go('summary', {
					id: post.key
				})
			})
	}

	ctrl.selectPostEdit = function(postId) {
		$state.go('edit', {
			id: postId
		})
	}

	ctrl.deletePost = function(post) {
		console.log(post)
		var message = 'Do you really want to delete ' + post + 'from posts?';
		var pickedPost = BlogService.getPostById(post);
		if ($window.confirm(message)) {
			return BlogService
				.deletePost(pickedPost)
				.then(function() {
					$state.go($state.current, {}, {
						reload: true
					});
				})
		}
	}
}


angular
	.module('myBlog')
	.controller('PostSummaryController', PostSummaryController)