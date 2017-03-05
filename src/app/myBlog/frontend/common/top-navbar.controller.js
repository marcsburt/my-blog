function TopNavbarController($uibModal){
		var ctrl = this;

		ctrl.animationsEnabled = true;

		ctrl.login = function() {
			var modalInstance = $uibModal.open({
				animation: ctrl.animationsEnabled,
				component: 'loginModal'
			});
			modalInstance.result.then(function() {}, function() {});
		}
}

angular
	.module('myBlog')
	.controller('TopNavbarController', TopNavbarController)