function modalController() {
  var ctrl = this;

  ctrl.$onInit = function() {
    ctrl.post = ctrl.resolve.post;
  };

  ctrl.ok = function() {
    ctrl.close();
  };

  ctrl.cancel = function() {
    ctrl.dismiss();
  };
};

angular
  .module('myBlog')
  .controller('modalController', modalController)