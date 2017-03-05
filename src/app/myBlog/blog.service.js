function BlogService(AuthService, $firebaseRef, $firebaseArray, $firebaseObject) {
	var ref = $firebaseRef.blog;

	if (AuthService.getUser() == !null){
		var uid = AuthService.getUser().uid;
		console.log(uid)
	}

	//get all blog posts --
	this.getAllPosts = function() {
		return $firebaseArray(ref);
	}
	//get all posts by specific id
	this.getPostById = function(postid) {
		return $firebaseObject(ref.child(postid))
	}

	//create new post under /blog -- change this th
	this.createNewPost = function(post) {
		return $firebaseArray(ref).$add(post);
	}
	//input post and delete it behind UID
	this.deletePost = function(post){
		return post.$remove();
	}
	//take post and update it
	this.updatePost = function(post){
		return post.$save()
	}
	// add comment to the blog
	this.createNewComment = function(postId, newComment) {
		return $firebaseArray(ref.child(postId).child('allow_restrict').child('comments')).$add(newComment)
	}
}

angular
	.module('myBlog')
	.service('BlogService', BlogService);