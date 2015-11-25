/*first angular app*/
var friends = [{
    "name": "Roman Makukhin",
    "id": "10153247618159081"
}, {
    "name": "Denis Popov",
    "id": "764423286"
}, {
    "name": "Oles Petriv",
    "id": "100000009769293"
}, {
    "name": "Lili Mizina",
    "id": "1056235834404555"
}, {
    "name": "Вячеслав Костюченко",
    "id": "1041438152555336"
}, {
    "name": "Svitlana Merezhko",
    "id": "100002502609991"
}, {
    "name": "Petro Akzhygitov",
    "id": "766342876814788"
}, {
    "name": "Nikita Slobodian",
    "id": "470533246439325"
}];
var Kukuruku = angular.module('Kukuruku', ['ngRoute']);
Kukuruku.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'ng-templates/main.html',
            controller: 'mainController'
        }).
        when('/:friendId', {
            templateUrl: 'ng-templates/friend.html',
            controller: 'friendController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);
Kukuruku.controller('homeController', function($scope) {

});
Kukuruku.controller('mainController', function($scope) {
    console.log('$scope', $scope);
    $scope.kuku = 'kuku';
    $scope.friends = friends;
    this.kuku1 = 'kuku1';
});
Kukuruku.controller('friendController', function($scope, $routeParams) {
    console.log($routeParams);

    $scope.friend = _.findWhere(friends, {
        id: $routeParams.friendId
    });
    $scope.active = false;
    $scope.activate = function() {
        $scope.active = !$scope.active;
    };
    $scope.backTo = function(name) {
        $scope.friend.name = name;
    }
    $scope.changes = [];
    $scope.$watch('friend.name', function(newval, oldval) {

        if (newval != oldval) {
            $scope.changes.push(newval);
        }
    })
});