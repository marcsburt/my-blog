function PostNewController(BlogService, $state, $window, $uibModal){

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
				comment: []
			}
		}
	}
	//create new post and push to Blog Service then change to summary state
	ctrl.createNewPost = function(event){
		return BlogService
			.createNewPost(event.post)
			.then(function (post){
				$state.go('summary', {})
			})
	}

	//preview post in modal
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
	.controller('PostNewController', PostNewController)