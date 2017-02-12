function BlogListController(){
	var ctrl = this;
	ctrl.$onInit = function (){
		console.log(this.posts + " pre-post")
		console.log(this.blogList + " blogList")
		this.posts = this.blogList
		console.log(this.posts + " posts")
	}
}



angular
	.module('myBlog')
	.controller('BlogListController', BlogListController)