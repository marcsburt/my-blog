function PostNewController(BlogService, $state){

	var ctrl = this;
	ctrl.$onInit = function() {

		//initialize new post object
		// "allow_user_write gives access to a logged in user to perform crud operations of all kind"
		ctrl.post = {
			allow_user_write: {
				date: new Date().getTime(),
				body: '',
				author: '',
				description: '',
				tags: '',
				title: ''
			},
			//allow_restrict gives user access, but is validated in Firebase -- I say no to you hackers!
			allow_restrict: {
				shared: 0,
				upvoted: 0,
			}
		}
	}
	ctrl.createNewPost = function(event){
		return BlogService
			.createNewPost(event.post)
			.then(function (post){
				$state.go('summary', {})
			})
	}
}

angular
	.module('myBlog')
	.controller('PostNewController', PostNewController)