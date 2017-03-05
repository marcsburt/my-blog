var loginModal ={
		templateUrl: './login-modal.html',
		bindings: {
			close: '&',
			dismiss: '&'
		},
		controller: 'LoginModalController'
}

angular
	.module('myBlog')
	.component('loginModal', loginModal)