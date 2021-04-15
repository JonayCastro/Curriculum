angular.module('appAngular')
    .controller('portfolioController', function($scope){
        $scope.enlaces = [
            ['https://jonaycastro.github.io/ConversorUnidades/', 'Conversor de Unidades', 'assets/img/unidades.jpg', 'imagen fotovoltaica'],
            ['https://jonaycastro.github.io/CalculadoraFotovoltaica/', 'Calculadora Fotovoltaica', 'assets/img/fotovoltaica.jpg', 'unidades de medida'],
            ['https://jonaycastro.github.io/Lift/', 'Simulador de Ascensor', 'assets/img/ascensor.jpg', 'animación de ascensor']
        ];
    });