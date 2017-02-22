function ContactMeService ($firebaseRef, $firebaseArray){
	var ref = $firebaseRef.contact;
	this.createNewMessage = function (message) {
		return $firebaseArray(ref).$add(message);
	}
	this.getAllMessages = function (){
		return $firebaseArray(ref);
	}
}

angular
	.module('myBlog')
	.service('ContactMeService', ContactMeService)