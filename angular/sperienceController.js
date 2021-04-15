angular.module('appAngular')
    .controller('sperienceController', function($scope){
        /* Cada experiencia debe de ir dentro de un array,
        los datos dentro de estos array deben tener el siguiente orden:
        0 -> Nombre de la experiencia
        1 -> Fecha de inicio
        2 -> Fecha de fin
        3 -> Empresa
        4 -> Categoría profesional
        5 -> Comentarios
        Ej:
        $scope.ajeno = 
        [
            ['Reparación de ascensores', 'Noviembre 2010', 'Junio 2017', 'Orona', 'Oficial 2ª', 'Sin comentarios'],

        ];

         */

        $scope.ajeno = [
            ['montaje y reparación de ascensores', 'julio 2018', 'actualmente', 'integra ascensores s.l.', 'oficial de 2ª', 'sin comentarios'],
            ['mantenimento y reparación de ascensores', 'noviembre 2010', 'junio 2016', 'cosecan grupo orona', 'oficial de 3ª', 'sin comentarios'],
            ['instalaciones eléctricas', '2005', '2006', 'instalaciones electricas dl s.l.', 'oficial de 3ª', 'aunque mi categoría era oficial de 3ª, llevaba a cabo funciones de oficial de 1ª'],
            ['instalación lineas telefónicas', 'febrero 2005', 'marzo 2005', 'metesa', 'peón', 'sin comentarios'],
            ['montaje y mantenimiento de instalaciones eléctricas', '2001', '2005','fuerzas armadas', 'soldado', 'mi graduación era la de soldado, pero como eléctricista tenía categoría de oficial de 2ª'],
            ['montaje falsos techos y tabiques de pladur', 'febrero 2000', 'agosto 2008', 'falsos techos y tabiques isla de tenerife s.l', 'peón', 'sin comentarios']
        ];
        $scope.autonomo = [
            ['montaje de ascensores', 'junio 2016', 'julio 2018', 'multimarca','autónomo', 'sin comentarios'],
            ['montaje de ascensores', '2008', 'octubre 2010', 'multimarca', 'autónomo', 'sin comentarios'],
            ['montaje de ascensores', '2006', '2008', 'kone', 'autónomo', 'sin comentarios']
        ];
        $scope.otro = [];

    });