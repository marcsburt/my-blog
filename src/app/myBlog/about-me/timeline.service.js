function TimelineService(){
	self.timelineData = [{
		name: "Inbound Technical Data Analyst (contract)",
		type: "B",
		place: "The TJX Companies, Inc.",
		dateFrom: Date.parse("April, 2016"),
		dateTo: Date.parse("Oct, 2016"),
		message: "Automated data consolidation processes and streamlined reporting endeavors.  Explored complex transportation data sets using statistical and visualization techniques with Excel, Access, Python, and SQL.  Communicated insights from analysis."
	},{
		name: "Financial Advisor",
		type: "B",
		place: "Ameriprise Financial Services",
		dateFrom: Date.parse("Aug, 2014"),
		dateTo: Date.parse("Nov, 2015"),
		message: "Integrated cash flow, risk management, investment, and tax management analysis to fulfill client's financial objectives. Identified and measured performance of various financial security products."
	},{
		name: "Case Manager AW2 (contract)",
		type: "B",
		place: "United State Department of Defense",
		dateFrom: Date.parse("June, 2011"),
		dateTo: Date.parse("Aug, 2014"),
		message: "Served as primary point of contact between DOD and VBA agencies for all progress of care issues related to severely injured military personnel.  Project management with focus on formulating relationships with non-profit entities to increase breadth of care."
	},{
		name: "Case Manager AW2 (contract)",
		type: "B",
		place: "United State Department of Defense",
		dateFrom: Date.parse("June, 2011"),
		dateTo: Date.parse("Aug, 2014"),
		message: "Served as primary point of contact between DOD and VBA agencies for all progress of care issues related to severely injured military personnel.  Project management with focus on formulating relationships with non-profit entities to increase breadth of care."
	},{
		name: "Co-Founder/Web Developer",
		type: "B",
		place: "RoPurt LLC",
		dateFrom: Date.parse("Oct, 2011"),
		dateTo: Date.parse("Dec, 2012"),
		message: "Co-founder of RoPurt, a web development company focused on small businesses.  My primary responsibilities included implementing company business plan, maintaining marketing strategy, establishing client relationships, and building pricing models.  I developed a working knowledge of PHP, CSS, HTML, and SQL."
	},{
		name: "Social Work Case Manager",
		type: "B",
		place: "Monadnock Family Services",
		dateFrom: Date.parse("March, 2010"),
		dateTo: Date.parse("Jun, 2011"),
		message: "Managed the care over forty severely mentally ill clients.  Regularly assessed treatment needs and provided access to specialized services.  Developed, monitored, and evaluated treatment plans; facilitated interdisciplinary approaches."
	},{
		name: "MS in Computer Science and Data Analytics (Current Student)",
		type: "E",
		place: "Boston University",
		dateFrom: Date.parse("Jan, 2016"),
		dateTo: new Date(),
		message: "R, SQL, Data Analysis, Google Analytics, Data Mining, Database, Data Preparation, Machine Learning"
	}, {
		name: "Masters in Business Administration",
		type: "E",
		place: "University of Rhode Island",
		dateFrom: Date.parse("Jan, 2012"),
		dateTo: Date.parse("Dec, 2013"),
		message: "Statistical Methods for Management, Strategic Management, Managercial Accounting Bonds, Derivates, Principles of Economics, Finance"
	}, {
		name: "Bachelor's Degree in Clinical Psychology",
		type: "E",
		place: "Keene State College",
		dateFrom: Date.parse("Aug, 2005"),
		dateTo: Date.parse("Dec, 2008"),
		message: "General Psychology, Psychological Statistics, Research Methodology, Sociology, Cognitive Processing"
	},  {
		name: "Providence Marathon Finisher",
		type: "P",
		message: "I finished in around 4 hours.  The last 20 minutes were the longest!",
		dateTo: Date.parse("August, 2012")
	}, {
		name: "CFA Level 1",
		type: "P",
		message: "I passed the first one and didn't have a chance to take the other two.  It's still on the bucket list though",
		dateTo: Date.parse("Dec, 2013")
	}
	];

	this.getTimelineData = function(){
		return self.timelineData;
	}
}

angular
	.module('myBlog')
	.service('TimelineService', TimelineService)