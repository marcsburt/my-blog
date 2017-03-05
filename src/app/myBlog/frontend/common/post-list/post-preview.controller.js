function BlogPostController($sce) {
	var ctrl = this;
	ctrl.$onInit = function (){
		ctrl.posts = ctrl.postData
		ctrl.popoverShare = {
			templateUrl: './share-popover.html'
		};
	}

	ctrl.shared = function(){
		console.log('got clicked, eh')
	}
}

angular
	.module('myBlog')
	.controller('BlogPostController', BlogPostController)