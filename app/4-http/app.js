var app = angular.module('angularIntroApp', []);


app.controller('MainCtrl', ['$http', function ($http) {
    var self = this;
    self.items =[];
    self.newItem = {};


    var fetchItems = function() {
        return $http.get('http://requestb.in/zf9q83zf').then(
            function(response) {
                self.items = response.data;
            }, function(errResponse) {
                console.error('Error while fetching notes');
            });
    };

    fetchItems();

    self.add = function() {
        $http.post('http://jsonplaceholder.typicode.com/posts', self.newItem)
            .then(fetchItems)
            .then(function(response) {
                self.newItem = {};
            });
    };
}]);