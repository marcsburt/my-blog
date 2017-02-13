function BlogService($http, $firebaseRef, $firebaseArray, $firebaseObject) {

  var ref = $firebaseRef.blog;
  this.getFireBlog = function (){
    return $firebaseArray(ref)
  }


  // var API = '//jsonplaceholder.typicode.com/posts/';
  // this.getPosts = function(start, stop) {
  //   return $http
  //     .get(API)
  //     .then(function(response){
  //       if (stop == 0){
  //         return response.data;
  //       } else {
  //         return response.data.splice(start, stop);
  //       }
  //     }, function (reason){
  //       console.log(reason);
  //     })
  // }
  
  // this.getAllPosts = function(){
  //   return this.getPosts(0,0);
  // }
    
  // this.getLandingPosts = function(){
  //   return this.getPosts(0,4);
  // }

}

angular
    .module('myBlog')
    .service('BlogService', BlogService);