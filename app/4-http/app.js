var app = angular.module('angularIntroApp', []);


app.controller('MainCtrl', ['$http', function ($http) {
    var self = this;
    self.items =[];
    self.newItem = {};


    var fetchItems = function() {
        return $http.get('/api/note').then(
            function(response) {
                self.items = response.data;
            }, function(errResponse) {
                console.error('Error while fetching notes');
            });
    };

    fetchItems();

    self.add = function() {
        $http.post('/api/note', self.newItem)
            .then(fetchItems)
            .then(function(response) {
                self.newItem = {};
            });
    };
}]);