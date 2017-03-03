function PostEditController(BlogService, $state, $window){
	var ctrl = this;
	ctrl.updatePost = function(event){
		return BlogService
			.updatePost(event.post)
			.then(function(){
				$state.go('summary')
			})
	}	

	ctrl.deletePost = function(event){
		var message = 'Do you really want to delete ' + event.post.title +'from posts?'
		if($window.confirm(message)){
			return BlogService
				.deletePost(event.post)
				.then(function(){
					$state.go('summary')
				})
		}
	}

	}

angular
	.module('myBlog')
	.controller('PostEditController', PostEditController)