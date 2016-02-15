var app = angular.module('Prueba', ['ui.router', 'ngAnimate', 'ngResource', 'toastr']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            controller: 'HomeController',
            templateUrl: 'rutas/usuario.html'
        })

    .state('pastel', {
        url: '/:idUsuario/pastel',
        controller: 'PastelController',
        templateUrl: 'rutas/pastel.html'
    })

    .state('ingrediente', {
        url: '/:idPastel/ingrediente',
        controller: 'IngredienteController',
        templateUrl: 'rutas/ingrediente.html'
    });
});
//         .state('cuenta.borrar', {
//             url: "/borrar",
//             templateUrl: "Angular/Rutas/borrar.html",
//             controller: 'borrarcontroller'
//         });
//
//
// });