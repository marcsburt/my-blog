var postPopover = {
	bindings:{
		post: '<'
	},
	templateUrl: './post-popover.html',
	controller: 'PostPopoverController'
}

angular
	.module('myBlog')
	.component('postPopover', postPopover)