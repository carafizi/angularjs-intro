var app = angular.module('angularIntroApp', []);


app.controller('MainCtrl', ['$http', function ($http) {
    var self = this;
    self.members =[];
    self.newMember = {status:false};


    var fetchMembers = function() {
        return $http.get('/api/members').then(
            function(response) {
                self.members = response.data;
            }, function(errResponse) {
                console.error('Error while fetching notes');
            });
    };

    fetchMembers();

    self.add = function() {
        $http.post('/api/members', self.newMember)
            .then(fetchMembers)
            .then(function(response) {
                self.newMember = {};
            });
    };
}]);