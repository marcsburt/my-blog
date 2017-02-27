function PostNewController(AddRemoveService, $state){

	var ctrl = this;
	ctrl.$onInit = function() {
		ctrl.post = {
			date: '',
			body: '',
			author: '',
			description: '',
			title: '',
			tags: '',
			shared: 0,
			upvoted: ''
		}
	}
	ctrl.createNewPost = function(event){
		var date = new Date().toJSON();
		event.post.date = date;
		return AddRemoveService
			.createNewPost(event.post)
			.then(function (post){
				$state.go('summary', {
					id: post.key
				})
			})
	}
}

angular
	.module('myBlog')
	.controller('PostNewController', PostNewController)