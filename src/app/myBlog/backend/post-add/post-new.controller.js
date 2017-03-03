function PostNewController(BlogService, $state){

	var ctrl = this;
	ctrl.$onInit = function() {

		//initialize new post object
		// "allow_user_write gives access to a logged in user to perform crud operations of all kind"
		ctrl.post = {
			allow_user_write: {
				date: '',
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
				comments: '' // !!!!!!  idk if I want to keep this here or add a new page --- makes more sense this way for now but what happens when this begins to grow??!!!!!!!
			}
		}
	}
	ctrl.createNewPost = function(event){
		var date = new Date();
		//create a date and append event with it.  !!!! Do I need to new this?  -- ask google soon.
		event.post.allow_user_write.date = date;
		return BlogService
			.createNewPost(event.post)
			.then(function (post){
				$state.go('summary', {
					//carry the id with it... redundency - remove because we're getting our summary directly from Blog Service.
					id: post.key
				})
			})
	}
}

angular
	.module('myBlog')
	.controller('PostNewController', PostNewController)