function ContactMeController(){
	var ctrl = this;
	ctrl.$onInit = function() {
		ctrl.message = {
			name: '',
			email: '',
			phone: '',
			subject: '',
			message: ''
		}
	};
}

angular
	.module('myBlog')
	.controller('ContactMeController', ContactMeController)