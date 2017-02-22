function ContactMeController(ContactMeService, $state){
	var ctrl = this;
	ctrl.$onInit = function() {
		ctrl.message = {
			name: '',
			email: '',
			phone: '',
			subject: '',
			message: '',
			date: ''
		}
	};
	ctrl.createNewMessage = function(){
		var date = new Date().toJSON();
		ctrl.message.date = date;
		return ContactMeService
			.createNewMessage(ctrl.message)
			.then(function (){
				$state.go('contactme', {}, {reload: true})
			})
	};
}

angular
	.module('myBlog')
	.controller('ContactMeController', ContactMeController)