var messagesSummary = {
	bindings:{
		messages: '<'
	},
	templateUrl: './messages.html',
	controller: 'MessagesSummaryController'
}

angular
	.module('myBlog')
	.component('messagesSummary', messagesSummary)
	.config(function ($stateProvider){
		$stateProvider
			.state('messages', {
				parent: 'backend',
				url: '/messages',
				component: 'messagesSummary',
				resolve:{
					messages: function(ContactMeService){
						return ContactMeService.getAllMessages().$loaded();
					}
				}
			});
	});