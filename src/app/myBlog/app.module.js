angular
  .module('myBlog', [
    'ui.router',
    'firebase',
    'ngAnimate',
    'ng-fx',
    'angularUtils.directives.dirPagination'
  ])

  .config(function($firebaseRefProvider) {
    const config = {
      apiKey: "AIzaSyDzRlZwtJl1iRpLJ6Su0CtmT9IptJJIv6I",
      authDomain: "personal-blog-e29be.firebaseapp.com",
      databaseURL: "https://personal-blog-e29be.firebaseio.com",
      storageBucket: "personal-blog-e29be.appspot.com",
      messagingSenderId: "702643554093"
    };

    $firebaseRefProvider
      .registerUrl({
        default: config.databaseURL,
        blog: config.databaseURL + '/blog',
        timeline: config.databaseURL + '/timeline'
      })

    firebase.initializeApp(config);
  })
  .config(function($urlRouterProvider) {
    $urlRouterProvider
      .otherwise('landing')
  })
  .run(function ($transitions, $state, AuthService){
    $transitions.onStart({
      to: function(state) {
        return !!(state.data && state.data.requiredAuth);
      }
    }, function(){
      return AuthService
        .requireAuthentication()
        .catch(function (){
          return $state.target('auth.login');
      });
    });
    $transitions.onStart({
      to: 'auth.*'
    }, function(){
      if(AuthService.isAuthenticated()) {
        return $state.target('backend')
      }
    })
  })
  