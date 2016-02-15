app.factory('PastelFactory', ['$resource', function ($resource) {

    var factory = $resource(
        'http://localhost:1337/pastel/:idPastel', {
            idUsuario: '@idPastel'
        }, {
            actualizar: {
                method: 'POST',
                params: {
                    idPastel: '@idPastel'
                }

            }
            /*buscarPorIdUsuario: {
    url: 'http://localhost:1337/pastel?idUsuario=:idUsuario',
    method: 'GET',
    params: {
        idPastel: '@idPastel'
    },
    isArray: true
}*/
        });

    return factory;

}]);