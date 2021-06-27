'use strict';

angular.module('appAngular')
    .controller('portfolioController', function($scope, $http){
        $scope.portfolio; 

        $http.get('./assets/archivos/portfolio.json')
        .then(
            function success(response){
                $scope.portfolio = angular.fromJson(response.data);
            },
            function error(error){
                console.log(error.statusText);
            }
        );
    });