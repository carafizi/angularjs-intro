var app = angular.module('fifaApp', ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider.when('/', {
      templateUrl: 'views/team_list.html',
      controller: 'TeamListCtrl as teamListCtrl'
    })
    .when('/login', {
      templateUrl: 'views/login.html'
    })
    .when('/team/:code', {
      templateUrl: 'views/team_details.html',
      controller:'TeamDetailsCtrl as teamDetailsCtrl',
      resolve: {
        auth: ['$q', '$location', 'UserService',
          function($q, $location, UserService) {
             return UserService.session().then(
               function(success) {},
               function(err) {
                  $location.path('/login');
                  $location.replace();
                  return $q.reject(err);
             });
        }]
      }
    });
    $routeProvider.otherwise({
      redirectTo: '/'
    });
  });
