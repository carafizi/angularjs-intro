var app = angular.module('angularIntroApp', []);


app.controller('FilterCtrl', [function () {
    this.amount = 1024;
    this.totalCost = 4906;
    this.name = 'Jon Snow';
    this.startTime = new Date().getTime();
}]);

app.controller('FilterCtrl2', [function() {
    this.amount = 1024;
    this.name = 'Ned Stark';
    this.obj = {test: 'value', num: 123};
    this.startTime = new Date().getTime();
}]);

app.controller('FilterCtrlArrays', [function() {
    this.teams = [
        {team: 'Barcelona', country: 'Spain', isChampion: true},
        {team: 'Real Madrid', country: 'Spain', isChampion: false},
        {team: 'Liverpool', country: 'England', isChampion: true},
        {team: 'Arsenal', country: 'England', isChampion: false},
        {team: 'Bavaria', country: 'Germany', isChampion: true},
        {team: 'Shalke', country: 'Germany', isChampion: false},
        {team: 'Milan', country: 'Italy', isChampion: true},
        {team: 'Inter', country: 'Italy', isChampion: false}
    ];

    this.sortOrder = ['+country', '-team'];

    this.filterOptions = {
        "string": '',
        "object": {isChampion: true, team: 'B'},
        "function": function(team) {
            return team.country === 'Spain' && team.isChampion === false;
        }
    };

    this.currentFilter = 'string';
}]);


app.controller('FilterCtrlCustom', [function() {
    this.startTime = new Date().getTime();
    this.someTimeAgo = new Date().getTime() - (1000 * 60 * 60 * 4);
}])
    .filter('timeAgo', [function() {
        var ONE_MINUTE = 1000 * 60;
        var ONE_HOUR = ONE_MINUTE * 60;
        var ONE_DAY = ONE_HOUR * 24;
        var ONE_MONTH = ONE_DAY * 30;

        return function(ts) {
            var currentTime = new Date().getTime();
            var diff = currentTime - ts;
            if (diff < ONE_MINUTE) {
                return 'seconds ago';
            } else if (diff < ONE_HOUR) {
                return 'minutes ago';
            } else if (diff < ONE_DAY) {
                return 'hours ago';
            } else if (diff < ONE_MONTH) {
                return 'days ago';
            } else {
                return 'months ago';
            }
        };
    }]);

