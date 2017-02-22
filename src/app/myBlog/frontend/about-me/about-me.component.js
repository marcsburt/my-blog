var aboutMe = {
	bindings: {
		allTimeline: '<'
	},
	templateUrl: './about-me.html',
	controller: 'AboutMeController'
}

angular
	.module('myBlog')
	.component('aboutMe', aboutMe)
	.config(function ($stateProvider){
		$stateProvider
			.state('aboutme', {
				parent: 'common',
				url: '/aboutme',
				component: 'aboutMe',
				bindings: {
					allTimeline: 'resolveTimeline'
				},
				resolve:{
					resolveTimeline: function(TimelineService){
						return TimelineService.getTimelineData();
					}
				}
			});
	});