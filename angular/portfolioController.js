angular.module('appAngular')
    .controller('portfolioController', function($scope){
        /* 
            Εl formato para $scope.enlaces es:
            $scope.enlaces = [[0,1,2,3]]
            0 -> Url del enlaces (atributo ng-href)
            1 -> Texto que se muestra bajo la imagen con :hover
            2 -> Url de la imagen en la ruta assets/img/[nombre de la imagen] (atributo ng-src)
            3 -> Texto alternativo que se muestra cuando falla la carga de la imagen (atributo alt)
            4 -> Atributo title de la imagen
         */
        $scope.enlaces = [
            ['https://jonaycastro.github.io/ConversorUnidades/', 'Conversor de Unidades', 'assets/img/unidades.jpg', 'imagen fotovoltaica', 'Enlace a Conversor de unidades'],
            ['https://jonaycastro.github.io/CalculadoraFotovoltaica/', 'Calculadora Fotovoltaica', 'assets/img/fotovoltaica.jpg', 'unidades de medida', 'Enlace a Calculadora Fotovoltaica'],
            ['https://jonaycastro.github.io/Lift/', 'Simulador de Ascensor', 'assets/img/ascensor.jpg', 'animación de ascensor', 'Enlace a Simulador de Ascensor']
        ];
    });