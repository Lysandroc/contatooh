angular
.module('contatooh')
.controller('ContatosController', function($scope, Contato) {
		
		$scope.filtro='';
		$scope.contatos = [];
		$scope.mensagem = {texto: ''};
		
		$scope.buscaContato = function() {
			var promise = Contato.query().$promise;
			promise.then(function(contatos) {
				$scope.contatos = contatos;
			}, function(erro) {
				$scope.mensagem.texto='Nao foi possivel obter a lista de contatos.' + erro;
			});
		};
		
		$scope.removeContato = function(contato) { 
			console.log(contato);
			var promise = Contato.delete({id: contato._id}).$promise;
			promise.then($scope.buscaContato, function(erro) {
				$scope.mensagem.texto='Nao foi possivel remover contato.' + erro;
			});
		}; 
		
		$scope.init = function() {
			$scope.buscaContato();
		}();
	}
);	




