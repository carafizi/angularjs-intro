var app = angular.module('angularIntroApp', []);

//Using controllers
app.controller('MainCtrl', function () {
  this.tab = 'first';
  this.open = function (tab) {
    this.tab = tab;
  };
});

app.controller('SubCtrl', function () {
  this.list = [
    {id: 1, label: 'Item 0'},
    {id: 2, label: 'Item 1'}
  ];

  this.add = function () {
    this.list.push({
      id: this.list.length + 1,
      label: 'Item ' + this.list.length
    });
  };
});

app.controller('LogController', ['$log', '$location', function($l, $location) {
  var number = 1;
  this.logStuff = function() {
    $l.log('The button was pressed -' + number);
    //$l.log('Browser url -' + $location.host());
    number++;
  };
}]);


//Using service
app.controller('MainCtrl2', [function() {
  this.tab = 'first';
  this.open = function(tab) {
    this.tab = tab;
  };
}]);

app.controller('SubCtrl2', ['ItemService', function(ItemService) {
  this.list = function() {
    return ItemService.list();
  };

  this.add = function() {
    ItemService.add({
      id: this.list().length + 1,
      label: 'Item ' + this.list().length
    });
  };
}]);

app.factory('ItemService', [function() {
    var items = [
      {id: 1, label: 'Item 0'},
      {id: 2, label: 'Item 1'}
    ];
    return {
      list: function() {
        return items;
      },
      add: function(item) {
        items.push(item);
      }
    };
  }]);

//another way of declaring AngularJS service
app.service('ItemService2', [ItemService2]);
function ItemService2() {
  var items = [
    {id: 1, label: 'Item 0'},
    {id: 2, label: 'Item 1'}
  ];
  this.list = function() {
    return items;
  };
  this.add = function(item) {
    items.push(item);
  };
}
