'use strict';

angular.module('appAngular')
    .controller('sperienceController', function($scope, $http){
        $scope.criterio = '';
        $scope.title = 'Todo';

        $scope.setCriterio = (c,t)=>{
            $scope.criterio = c;
            $scope.title = t;
            
        };
        
        $scope.experience; 

        $http.get('./assets/archivos/experiencia.json')
        .then(
            function success(response){
                $scope.experience = angular.fromJson(response.data);
            },
            function error(error){
                console.log(error.statusText);
            }
        );

    });