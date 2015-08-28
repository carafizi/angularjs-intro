var app = angular.module('angularIntroApp', []);

app.controller('MainCtrl', [function () {
  this.message = 'Hello';

  self.changeMessage = function () {
    if(self.message == 'Hello'){
      self.message = 'Goodbye';
    }else{
      self.message = 'Hello'
    }
  };

  self.log = function(){
    console.log('MainCtrl has been created');
  }
}]);

app.controller('NgRepeatCtrl', [function() {
  this.notes = [
    {id: 1, label: 'First Note', done: false},
    {id: 2, label: 'Second Note', done: false},
    {id: 3, label: 'Done Note', done: true},
    {id: 4, label: 'Last Note', done: true}
  ];
}]);

app.controller('MoreDirectivesCtrl', [
  function() {
    this.notes = [
      {label: 'First Note', done: false, assignee: 'Martin'},
      {label: 'Second Note', done: false, assignee: 'Honza'},
      {label: 'Done Note', done: true},
      {label: 'Last Note', done: false, assignee: 'David'}
    ];

    this.getNoteClass = function(status) {
      return {
        done: status,
        pending: !status
      };
    };
  }]);

app.controller('NgRepeatObjectCtrl', [function() {
  this.notes = {
    Martin: {
      id: 1,
      label: 'First Note',
      done: false
    },
    David: {
      id: 3,
      label: 'Finished Third Note',
      done: true
    },
    Pavel: {
      id: 2,
      label: 'Second Note',
      done: false
    }
  };
}]);



