angular
.module('contatooh')
.controller('ContatoController', function($scope, $routeParams, Contato) {
	
	var carrega = function() {
		if ($routeParams.contatoId) {
			var promise = Contato.get({id: $routeParams.contatoId}).$promise;
			promise.then(function(contato) {
				$scope.contato = contato;
				console.log(!!contato);
			}, function(erro){
				$scope.mensagem = {
					texto: 'Nao foi possivel obter o contato do cliente.'	
				};
				console.log(erro);
			});	
		} else {
			$scope.contato = new Contato();
		}
	};
	carrega();
	
	$scope.salva = function() {
		$scope.contato.$save()
		.then(function(){
			$scope.mensagem = {
				texto: 'Salvo com sucesso.'
			};
			$scope.contato = new Contato();
			console.log('salvo');
		}, function(erro){
			$scope.mensagem = {
				texto: 'Nao foi possivel salvar.'
			};
			console.log(erro);
		});
	};
});