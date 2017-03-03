function BlogService(AuthService, $firebaseRef, $firebaseArray, $firebaseObject) {

	if (AuthService.getUser() == !null){
		var uid = AuthService.getUser().uid;
		console.log(uid)
	}
	var ref = $firebaseRef.allposts;
	var baseRef = $firebaseRef.blog;

	this.getPostById = function(postid) {
		return $firebaseObject(baseRef.child(postid))
	}

	//creat new post under /blog -- change this th
	this.createNewPost = function(post) {
		return $firebaseArray(baseRef).$add(post);
	}

	//input post and delete it behind UID
	this.deletePost = function(post){
		return post.$remove();
	}
	//take post and update it
	this.updatePost = function(post){
		return post.$save()
	}
	//get all blog posts --
	this.getAllPosts = function() {
		return $firebaseArray(baseRef);
	}

}

angular
	.module('myBlog')
	.service('BlogService', BlogService);