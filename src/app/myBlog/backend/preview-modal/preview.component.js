var modalComponent = {
	templateUrl: './myModalContent.html',
	bindings: {
		resolve: '<',
		close: '&',
		dismiss: '&'
	},
	controller: 'modalController'
}


angular
	.module('myBlog')
	.component('modalComponent', modalComponent)