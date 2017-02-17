function PostNewController(AddRemoveService, $state){

	var ctrl = this;
	ctrl.$onInit = function() {
		ctrl.post = {
			body: '',
			author: '',
			description: '',
			title: '',
			tags: ['']
		}
	}
	ctrl.createNewPost = function(event){
		return AddRemoveService
			.createNewPost(event.post)
			.then(function (post){
				$state.go('new', {
					id: post.key
				})
			})
	}
}

angular
	.module('myBlog')
	.controller('PostNewController', PostNewController)