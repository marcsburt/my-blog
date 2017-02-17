function TimelineService(){
	self.timelineData = [{
		name: "Graduated From BU",
		type: "E",
		date: "May 10",
		message: "This is my graduation"
	}, {
		name: "Ran a marathon",
		type: "P",
		date: "May 12",
		message: "This is my marathon"
	}, {
		name: "Went to camp",
		type: "B",
		date: "Jan 12",
		message: "It was fun"
	},{
		name: "Graduated From BU",
		type: "E",
		date: "May 10",
		message: "This is my graduation"
	}, {
		name: "Ran a marathon",
		type: "P",
		date: "May 12",
		message: "This is my marathon"
	}, {
		name: "Went to camp",
		type: "B",
		date: "Jan 12",
		message: "It was fun"
	},{
		name: "Graduated From BU",
		type: "E",
		date: "May 10",
		message: "This is my graduation"
	}, {
		name: "Ran a marathon",
		type: "P",
		date: "May 12",
		message: "This is my marathon"
	}, {
		name: "Went to camp",
		type: "B",
		date: "Jan 12",
		message: "It was fun"
	}];

	this.getTimelineData = function(){
		return self.timelineData;
	}
}

angular
	.module('myBlog')
	.service('TimelineService', TimelineService)