var app = angular.module('fifaApp');

app.factory('FifaService', ['$http', function ($http) {
        return {
            getTeams: function () {
                return $http.get('/api/team');
            },

            getTeamDetails: function (code) {
                return $http.get('/api/team/' + code);
            }
        }
    }]);

app.factory('UserService', ['$http', function ($http) {
    var service = {
        isLoggedIn: false,

        session: function () {
            return $http.get('/api/session')
                .then(function (response) {
                    service.isLoggedIn = true;
                    return response;
                });
        },

        login: function (user) {
            return $http.post('/api/login', user)
                .then(function (response) {
                    service.isLoggedIn = true;
                    return response;
                });
        }
    };
    return service;
}]);
