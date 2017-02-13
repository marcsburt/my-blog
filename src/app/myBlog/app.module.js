angular
  .module('myBlog', [
    'ui.router',
    'firebase',
    'ui.router',
    'ngAnimate',
    'ng-fx',
    'angularUtils.directives.dirPagination'

  ])
  .config(function($firebaseRefProvider){
  	var config = {
  	  apiKey: "AIzaSyDzRlZwtJl1iRpLJ6Su0CtmT9IptJJIv6I",
  	  authDomain: "personal-blog-e29be.firebaseapp.com",
  	  databaseURL: "https://personal-blog-e29be.firebaseio.com",
  	  storageBucket: "personal-blog-e29be.appspot.com",
  	  messagingSenderId: "702643554093"
  	};

  	$firebaseRefProvider
  		.registerUrl({
  			post: config.databaseURL + '/blog',
  			timeline: config.databaseURL + '/timeline'
  		})

  	firebase.initializeApp(config);
  })
  .config(function ($urlRouterProvider){
    $urlRouterProvider
      .otherwise('landing')
  });
