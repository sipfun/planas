angular.module('approutes', ['ngRoute'])

.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
        
        .when('/home', {
            templateUrl : 'views/home.html',
            controller : 'exampleCtrl'
        })
        
        .otherwise({
            redirectTo : '/home'
        });
    }]);