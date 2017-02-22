var timeline = {
	bindings: {
		timelineData: '<'
	},
	templateUrl: './timeline.html',
	controller: 'TimelineController'
}

angular
	.module('myBlog')
	.component('timeline', timeline)