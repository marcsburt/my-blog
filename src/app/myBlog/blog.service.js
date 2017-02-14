function BlogService($http, $firebaseRef, $firebaseArray, $firebaseObject) {

  var ref = $firebaseRef.blog;
  this.getFireBlog = function (){
    return $firebaseArray(ref)

  }

  this.getPostById = function(postid){
      return $firebaseObject(ref.child(postid))
    }


}

angular
    .module('myBlog')
    .service('BlogService', BlogService);