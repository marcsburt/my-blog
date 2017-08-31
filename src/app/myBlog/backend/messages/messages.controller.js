function MessagesSummaryController(ContactMeService, NgTableParams, $state, $window){
	var ctrl = this;
	ctrl.$onInit = function() {
		ctrl.oneAtATime = true;
		ctrl.status = {
		  isCustomHeaderOpen: false,
		  isFirstOpen: true,
		  isFirstDisabled: false
		};
	}
	ctrl.itemsByPage = 20
	ctrl.removeMessage = function(messageid){
		var pickedMessage = ContactMeService.getOneMessage(messageid);
		var message = 'Do you really want to delete ' + messageid + ' from posts?';
		if ($window.confirm(message)) {
			return ContactMeService
				.deleteMessage(pickedMessage)
				.then(function() {
					$state.go($state.current, {}, {
						reload: true
					});
				})
		}
	}
}

angular
	.module('myBlog')
	.controller('MessagesSummaryController', MessagesSummaryController)