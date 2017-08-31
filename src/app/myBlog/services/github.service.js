function GithubService($http, $q){
	return {
		getGitData: function(){
			return $http.get('https://api.github.com/users/marcsburt/repos', {cache: true})
				.then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.log('error, yo');
						return $q.reject(errResponse);
					}
				);
		}
	}
}


angular
	.module('myBlog')
	.factory('GithubService', GithubService)