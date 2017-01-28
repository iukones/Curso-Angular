var misDatos = angular.module('datosApp', []);

misDatos.controller('controladorDatos',function($scope,$http){
        $scope.importar = function(){
            $http.get('json/datos.json').success(function(datos){
                $scope.equipo = datos;
            });
        }
        $scope.importar();
});