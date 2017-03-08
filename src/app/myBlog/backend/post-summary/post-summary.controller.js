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


	ctrl.oneAtATime = true;

	ctrl.groups = [
	  {
	    title: 'Dynamic Group Header - 1',
	    content: 'Dynamic Group Body - 1'
	  },
	  {
	    title: 'Dynamic Group Header - 2',
	    content: 'Dynamic Group Body - 2'
	  }
	];

	ctrl.items = ['Item 1', 'Item 2', 'Item 3'];

	ctrl.addItem = function() {
	  var newItemNo = ctrl.items.length + 1;
	  ctrl.items.push('Item ' + newItemNo);
	};

	ctrl.status = {
	  isCustomHeaderOpen: false,
	  isFirstOpen: true,
	  isFirstDisabled: false
	};
}


angular
	.module('myBlog')
	.controller('PostSummaryController', PostSummaryController)