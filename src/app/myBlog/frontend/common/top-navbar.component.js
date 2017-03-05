var topNavbar = {
	templateUrl: './top-navbar.html',
	controller: 'TopNavbarController'
}

angular
	.module('myBlog')
	.component('topNavbar', topNavbar)