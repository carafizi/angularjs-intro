var app = angular.module('angularIntroApp', []);

app.controller('SimpleNgModelCtrl', [function () {
  this.username = 'nothing';
}]);

app.controller('SimpleNgModelCtrl2', [function() {
  this.change = function() {
    this.username = 'changed';
    this.password = 'password';
  };
  this.submit = function() {
    console.log('User clicked submit with ',
      this.username, self.password);
  };
}]);

app.controller('SimpleFormController', [function() {
  this.submit = function() {
    //User variable is declared in ng-model directive in HTML
    console.log('User clicked submit with ', this.user);
  };
}]);
