function ProjectsController(GithubService) {
	var ctrl = this;
	ctrl.$onInit = function (){
		ctrl.gitRepo = {};
		ctrl.getAllRepos();	
	}
	ctrl.getAllRepos = function(){
		GithubService.getGitData()
			.then(
				function (d){
					ctrl.gitRepo = d
				},
				function(errResponse){
					console.log('error')
				}
			)
	}
}

angular
	.module('myBlog')
	.controller('ProjectsController', ProjectsController)