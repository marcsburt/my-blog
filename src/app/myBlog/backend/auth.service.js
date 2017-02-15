function AuthService($firebaseAuth){
	var auth = $firebaseAuth();
	var authData = null;

	//store authdata from login event
	function storeAuthData (response) {
		authData = response;
		return authData;
	};

	function onSignIn(user) {
	  authData = user;
	  return auth.$requireSignIn();
	}

	this.login = function (user) {
	  return auth
	    .$signInWithEmailAndPassword(user.email, user.password)
	    .then(storeAuthData);
	};

	this.requireAuthentication = function () {
	  return auth
	    .$waitForSignIn().then(onSignIn);
	};

	this.isAuthenticated = function () {
	  return !!authData;
	};

	this.getUser = function () {
	  if (authData) {
	    return authData;
	  }
	};
}


angular
  .module('myBlog')
  .service('AuthService', AuthService);