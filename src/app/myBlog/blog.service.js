function BlogService($firebaseRef, $firebaseArray, $firebaseObject) {

	var ref = $firebaseRef.allposts;
	this.getFireBlog = function() {
		return $firebaseArray(ref);
	}
	this.getPostById = function(postid) {
		return $firebaseObject(ref.child(postid))
	}
	this.updatePost = function(post){
		return post.$save()
	}


}

angular
	.module('myBlog')
	.service('BlogService', BlogService);