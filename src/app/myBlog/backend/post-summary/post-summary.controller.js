function PostSummaryController(BlogService, NgTableParams) {
	var ctrl = this;
	ctrl.$onInit = function() {
		ctrl.tableParams = new NgTableParams({}, {
			dataset: ctrl.posts
		})
		var dateFormat = _.pluck(ctrl.posts, 'date')
		ctrl.date = dateFormat
		ctrl.getDate = function(){
			return dateFormat
		}
	}
}

angular
	.module('myBlog')
	.controller('PostSummaryController', PostSummaryController)