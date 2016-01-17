var app = angular.module('fifaApp');

app.controller('MainCtrl', ['UserService', function (UserService) {
    var self = this;
    self.userService = UserService;

    // Check if the user is logged in when the application
    // loads
    // User Service will automatically update isLoggedIn
    // after this call finishes
    UserService.session();
}]);

app.controller('LoginCtrl', ['UserService', '$location', function (UserService, $location) {
    var self = this;
    self.user = {username: '', password: ''};

    self.login = function () {
        UserService.login(self.user).then(function (success) {
            $location.path('/');
        }, function (error) {
            self.errorMessage = error.data.msg;
        })
    };
}]);

app.controller('TeamListCtrl', ['FifaService', function (FifaService) {
    var self = this;
    self.teams = [];

    FifaService.getTeams().then(function (resp) {
        self.teams = resp.data;
    });
}]);


app.controller('TeamDetailsCtrl', ['$location', '$routeParams', 'FifaService', function ($location, $routeParams, FifaService) {
    var self = this;
    self.team = {};
    FifaService.getTeamDetails($routeParams.code)
        .then(function (resp) {
            self.team = resp.data;
        }, function (error) {
            $location.path('/login');
        });
}]);
