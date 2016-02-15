app.controller('HomeController', ['$scope', 'toastr', 'UsuarioFactory', function ($scope, toastr, UsuarioFactory) {

    $scope.nuevoUsuario = {
        nombre: '',
        apellido: '',
        edad: '',
        correo: '',
        ciudad: '',
        foto: ''
    }

    $scope.agregarNuevoUsuario = function (usuario) {

        UsuarioFactory.save(usuario, function (respuesta) {
            console.log(respuesta);
            toastr.success('Ingreso exitoso', 'Exito');
            $scope.usuario = {};
        });

    }

    UsuarioFactory.query().$promise.then(
        function succes(respuesta) {
            console.log(respuesta);
            // $scope.entrenadores = respuesta.data;
            $scope.usuarios = respuesta;
        },
        function error(error) {
            console.log(error);
            toastr.error('Ha ocurrido un error', 'Error');
        });


    $scope.editarUsuario = function (usuario) {
        UsuarioFactory.actualizar({
            idUsuario: usuario.id
        }, {
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            edad: usuario.edad,
            correo: usuario.correo,
            ciudad: usuario.ciudad,
            foto: usuario.foto
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






}]);