function BlogService($http) {
  var API = '//jsonplaceholder.typicode.com/posts/';
  this.getPosts = function() {
    return $http
      .get(API)
      .then(function(response){
        return response.data;
      }, function (reason){
        //error
      })
  }
}

angular
    .module('myBlog')
    .service('BlogService', BlogService);