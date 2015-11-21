angular.module('controllerapp1', [])

.controller('exampleCtrl', ['$scope', function ($scope) {
    $scope.var1 = 'val from exampleCtrl';
    
    $scope.functionClick = function ( cad ) {
        $scope.var1 = 'Hello, var1 value now is: ' +cad;
        console.log('estamos recibiendo: '+cad);
    }
}]);