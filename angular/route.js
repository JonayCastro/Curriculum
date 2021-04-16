angular.module('appAngular', ['ngRoute', 'ngAnimate'])
    .config(function($routeProvider){
        $routeProvider
        .when('/', {
            templateUrl:'templates/about.html',
            controller: 'controller'
        })
        .when('/experience', {
            templateUrl:'templates/experience.html',
            controller: 'controller'
        })
        .when('/portfolio', {
            templateUrl:'templates/portfolio.html',
            controller: 'controller'
        })
        .when('/study', {
            templateUrl:'templates/study.html',
            controller: 'controller'
        })
        .otherwise( {
            redirectTo:'/'
        })
    });