function BlogService($firebaseRef, $firebaseArray, $firebaseObject) {

	var ref = $firebaseRef.allposts;
	this.getFireBlog = function() {
		return $firebaseArray(ref);
	}

	this.getPostById = function(postid) {
		return $firebaseObject(ref.child(postid))
	}


}

angular
	.module('myBlog')
	.service('BlogService', BlogService);