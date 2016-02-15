app.controller('PastelController', ['$scope', 'toastr', 'PastelFactory', function ($scope, toastr, PastelFactory) {

    $scope.nuevoPastel = {
        nombre: '',
        tipo: '',
        foto: '',
        preparacion: ''

    }

    $scope.agregarNuevoPastel = function (pastel) {

        PastelFactory.save(pastel, function (respuesta) {
            console.log(respuesta);
            toastr.info('Éxito al crear el pastel.', 'Éxito');
            $scope.pastel = {};
        });

    }

    PastelFactory.query().$promise.then(
        function succes(respuesta) {
            console.log(respuesta);
            // $scope.entrenadores = respuesta.data;
            $scope.pasteles = respuesta;
        },
        function error(error) {
            console.log(error);
        });


    $scope.editarPastel = function (pastel) {
        PastelFactory.actualizar({
            idPastel: pastel.id
        }, {
            nombre: pastel.nombre,
            tipo: pastel.tipo,
            foto: pastel.foto,
            preparacion: pastel.preparacion

            //usuario: usuario
        }).$promise.then(
            function success(respuesta) {
                console.log(respuesta);
            },
            function error(error) {
                console.log(error);
            }
        );
    };

    toastr.success('title', 'text');
    toastr.error('title', 'text');
    toastr.warning('title', 'text');
    toastr.info('title', 'text');



}]);