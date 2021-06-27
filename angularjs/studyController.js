'use strict';

angular.module('appAngular')
    .controller('studyController', function($scope, $http){
        $scope.criterio = '';
        $scope.title = 'Todo';

        $scope.setCriterio = (c, t)=>{
            $scope.criterio = c;
            $scope.title = t;
        };
        
        $scope.study; 

        $http.get('./assets/archivos/formacion.json')
        .then(
            function success(response){
                $scope.study = angular.fromJson(response.data);
            },
            function error(response){
                console.log(response.statusText);
            }
        );
    });