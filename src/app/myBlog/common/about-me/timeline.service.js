function TimelineService(){
	timelineData = {
		type: "",
		date: "",
		message: ""
	}
}

angular
	.module('myBlog')
	.service('TimelineService', TimelineService)