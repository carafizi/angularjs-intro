var app = angular.module('angularIntroApp', []);

app.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/', {
        template: '<h5>This is the default route</h5>'
    })
        .when('/second', {
            template: '<h5>This is the second route</h5>'
        })
        .otherwise({redirectTo: '/'});
}]);