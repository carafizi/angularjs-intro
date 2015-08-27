var mod = angular.module('notesApp', []);

mod.controller('MainCtrl', [function () {

  console.log('MainCtrl has been created');

  var self = this;

  self.message = 'Hello';

  self.changeMessage = function () {
    if(self.message == 'Hello'){
      self.message = 'Goodbye';
    }else{
      self.message = 'Hello'
    }

  };
}]);
