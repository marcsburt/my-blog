function LandingPageController (){
	var ctrl = this;
	ctrl.$onInit = function (){
		ctrl.posts = ctrl.landing;
	}
}

angular
	.module('myBlog')
	.controller('LandingPageController', LandingPageController)