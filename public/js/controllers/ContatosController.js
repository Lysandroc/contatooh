angular
.module('contatooh')
.controller('ContatosController', function($scope, $resource) {
		
		$scope.filtro='';
		$scope.contatos = [];
		$scope.mensagem = {texto: ''};
		
		$scope.buscaContato = function() {
			var Contatos = $resource('/contatos/:id');
			var promise = Contatos.query().$promise;
			promise.then(function(contatos) {
				$scope.contatos = contatos;
			}, function(erro) {
				$scope.mensagem.texto='Nao foi possivel obter a lista de contatos.' + erro;
			});
		};
		
		$scope.removeContato = function(contato) { 
			console.log(contato);
			var Contatos = $resource('/contatos/:id');
			var promise = Contatos.delete({id: contato._id}).$promise;
			promise.then($scope.buscaContato, function(erro) {
				$scope.mensagem.texto='Nao foi possivel remover contato.' + erro;
			});
		}; 
		
		$scope.init = function() {
			$scope.buscaContato();
		}();
	}
);	




