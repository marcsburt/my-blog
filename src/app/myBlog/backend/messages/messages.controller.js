function MessagesSummaryController(ContactMeService, NgTableParams, $state){
	var ctrl = this;
	ctrl.$onInit = function() {
	}
	ctrl.itemsByPage = 20
}

angular
	.module('myBlog')
	.controller('MessagesSummaryController', MessagesSummaryController)