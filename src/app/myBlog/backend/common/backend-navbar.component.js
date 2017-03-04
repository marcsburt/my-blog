var backendNav = {
	bindings: {
		user: '<'
	},
	templateUrl: './backend-navbar.html',
	controller: 'BackendNavController'
}

angular
	.module('myBlog')
	.component('backendNav', backendNav)