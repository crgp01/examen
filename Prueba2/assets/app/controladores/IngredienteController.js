app.controller('IngredienteController', ['$scope', 'toastr', 'IngredienteFactory', '$stateParams', function ($scope, toastr, IngredienteFactory, $stateParams) {

    $scope.nuevoIngrediente = {
        nombre: ''
    }

    $scope.agregarNuevoIngrediente = function (ingrediente) {

        IngredienteFactory.save(ingrediente, function (respuesta) {
            console.log(respuesta);

            $scope.ingrediente = {};
        });


    }

    IngredienteFactory.query().$promise.then(
        function succes(respuesta) {
            console.log(respuesta);
            // $scope.entrenadores = respuesta.data;
            $scope.ingredientes = respuesta;
        },
        function error(error) {
            console.log(error);
        });




    toastr.error('title', 'text');
    toastr.warning('title', 'text');
    toastr.info('title', 'text');



}]);