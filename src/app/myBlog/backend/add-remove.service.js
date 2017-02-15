function AddRemoveService (AuthService, $firebaseRef, $firebaseArray, $firebaseObject){
	var ref = $firebaseRef.blog;
	var uid = AuthService.getUser().uid;
	this.createNewPost = function (post) {
		return $firebaseArray(ref(child(uid)).$add(post));
	}
	this.updatePost = function (post) {
		return post.$save();
	}
	this.deleteContact = function(post){
		return post.$remove
	}
}

angular
	.module('myBlog')
	.service('AddRemoveService', AddRemoveService)