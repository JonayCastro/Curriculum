angular.module('appAngular')
    .controller('footerController', function($scope){
        $scope.print = ()=>{
            window.print();
        };
    });