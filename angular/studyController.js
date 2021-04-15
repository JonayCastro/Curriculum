angular.module('appAngular')
    .controller('studyController', function($scope){
        /* Cada formación debe de ir dentro de un array,
        los datos dentro de estos array deben tener el siguiente orden:
        0 -> Nombre de la formación
        1 -> Fecha de inicio
        2 -> Fecha de fin
        3 -> Centro donde se realizó
        4 -> Comentarios
        Ej:
        $scope.reglados = 
        [
            ['Grado medio Electricidad', 'Octubre 2019', 'Cursando', 'IES La Laboral', 'Sin comentarios'],

        ];

         */
        $scope.reglados = [
            ['técnico de instalaciones eléctricas y automáticas','octubre 2019', 'cursando', 'i.e.s la laboral', 'sin comentaios'],
            ['educación secundaria obligatoria', '1996','1998','i.e.s padre anchieta', 'sin comentarios']
        ];
        $scope.noReglados = [];
        $scope.otros = [];
    });