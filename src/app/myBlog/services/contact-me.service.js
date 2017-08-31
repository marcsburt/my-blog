function ContactMeService ($firebaseRef, $firebaseArray, $firebaseObject){
	var ref = $firebaseRef.contact;
	this.getOneMessage = function(messageid){
		return $firebaseObject(ref.child(messageid))
	}
	this.createNewMessage = function (message) {
		return $firebaseArray(ref).$add(message);
	}
	this.getAllMessages = function (){
		return $firebaseArray(ref);
	}
	this.deleteMessage = function(message){
		return message.$remove();
	}
}

angular
	.module('myBlog')
	.service('ContactMeService', ContactMeService)