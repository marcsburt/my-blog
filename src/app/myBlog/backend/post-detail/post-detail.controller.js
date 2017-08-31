function PostDetailController(){
	var ctrl = this;
	ctrl.$onInit = function () {
	  ctrl.isNewPost = !ctrl.post.$id;
	};
	
	ctrl.savePost = function () {
		console.log('adding post')
	  ctrl.onSave({
	    $event: {
	      post: ctrl.post
	    }
	  });
	 };

	  ctrl.deletePost = function(){
	  	console.log('deleting post')
	  	ctrl.onDelete({
	  		$event: {
	  			post: ctrl.post
	  		}
	  	});
	  };

	  ctrl.updatePost = function(){
	  	ctrl.onUpdate({
	  		$event: {
	  			post: ctrl.post
	  		}
	  	});
	  };

	  ctrl.previewPost = function(){
	  	ctrl.onPreview({
	  		$event: {
	  			post: ctrl.post
	  		}
	  	})
	  }

	  
}

angular
	.module('myBlog')
	.controller('PostDetailController', PostDetailController)