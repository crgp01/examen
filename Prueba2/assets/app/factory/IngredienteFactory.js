app.factory('IngredienteFactory', ['$resource', function ($resource) {

    var factory = $resource(
        'http://localhost:1337/ingrediente/:idIngrediente', {
            idPastel: '@idIngrediente'
        }, {
            actualizar: {
                method: 'PUT',
                params: {
                    idIngrediente: '@idIngrediente'
                }

            },
            buscarPorIdPastel: {
                url: 'http://localhost:1337/ingrediente?idPastel=:idPastel',
                method: 'GET',
                params: {
                    idIngrediente: '@idIngrediente'
                },
                isArray: true
            }
        });

    return factory;

}]);