angular.module('contatooh').controller('ContatosController', 
	function($scope, $http) {
		
		$scope.filtro='';
		$scope.contatos = [];
		
		$http.get('/contatos')
		.success(function(data) {
			$scope.contatos = data;
		}).error(function(statusText) {
			console.log('Nao foi possivel ler a lista dos contatos.');
			console.log(statusText);
		});
	}
);	




