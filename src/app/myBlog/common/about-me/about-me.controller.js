function AboutMeController() {
	var ctrl = this;
	ctrl.timelineData = [{
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
		message: "It sucked balls"
	}]
}

angular
	.module('myBlog')
	.controller('AboutMeController', AboutMeController)