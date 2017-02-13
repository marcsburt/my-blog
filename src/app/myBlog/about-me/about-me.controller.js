function AboutMeController() {
	var ctrl = this;
	ctrl.$onInit = function (){
		ctrl.timelineData = ctrl.allTimeline
	}
}

angular
	.module('myBlog')
	.controller('AboutMeController', AboutMeController)