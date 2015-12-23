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

app.controller('ValidationController', [function() {
  this.submit = function() {
    console.log('User clicked submit with ', this.user);
  };
  //this.countries = [
  //  {label: 'Czech Republic', id: 1},
  //  {label: 'Germany', id: 2},
  //  {label: 'Other', id: 3}
  //];
  //this.selectedCountryId = 2;
  //this.selectedCountry = this.countries[1];

}]);
