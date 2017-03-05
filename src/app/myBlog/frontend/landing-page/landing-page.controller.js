function LandingPageController($uibModal, $log) {
	var ctrl = this;
	ctrl.$onInit = function() {
		ctrl.posts = ctrl.landing;
	}
	ctrl.animationsEnabled = true;
	ctrl.login = function() {
		var modalInstance = $uibModal.open({
			animation: ctrl.animationsEnabled,
			component: 'loginModal'
		});
		modalInstance.result.then(function() {}, function() {});
	}
};


angular
	.module('myBlog')
	.controller('LandingPageController', LandingPageController)