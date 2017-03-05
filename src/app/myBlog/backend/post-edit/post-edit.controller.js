function PostEditController(BlogService, $state, $window, $uibModal) {
	var ctrl = this;
	ctrl.updatePost = function(event) {
		return BlogService
			.updatePost(event.post)
			.then(function() {
				$state.go('summary')
			})
	}

	ctrl.deletePost = function(event) {
		var message = 'Do you really want to delete ' + event.post.title + 'from posts?'
		if ($window.confirm(message)) {
			return BlogService
				.deletePost(event.post)
				.then(function() {
					$state.go('summary')
				})
		}
	}
	ctrl.previewPost = function(event) {
		$state.go('editpreview', {
			post: event.post
		})
	}

	//open modal to preview post
	ctrl.animationsEnabled = true;

	ctrl.previewPost = function(event) {
		var modalInstance = $uibModal.open({
			windowClass: 'app-modal-window-preview',
			animation: ctrl.animationsEnabled,
			component: 'modalComponent',
			//resolve event of post and give it to post
			resolve: {
				post: function() {
					return event.post;
				}
			}
		});
	}
}

	angular
		.module('myBlog')
		.controller('PostEditController', PostEditController)