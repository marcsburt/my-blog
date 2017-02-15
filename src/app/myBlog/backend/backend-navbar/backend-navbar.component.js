var backendNav = {
	templateUrl: './backend-navbar.html',
	controller: 'BackendNavController'
}

angular
	.module('myBlog')
	.component('backendNav', backendNav)