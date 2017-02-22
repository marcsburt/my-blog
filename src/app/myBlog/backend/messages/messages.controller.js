function MessagesSummaryController(ContactMeService, NgTableParams, $state){
	var ctrl = this;
	ctrl.$onInit = function() {
		ctrl.messageParams = new NgTableParams({}, {
			dataset: ctrl.messages
		})
	}

}

angular
	.module('myBlog')
	.controller('MessagesSummaryController', MessagesSummaryController)