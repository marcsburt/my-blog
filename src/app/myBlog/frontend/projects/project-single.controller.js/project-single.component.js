var projectSingle = {
	bindings:{
		repo: '<'
	},
	templateUrl: './project-single.html',
	controller: 'ProjectSingleController'
}

angular
	.module('myBlog')
	.component('projectSingle', projectSingle)