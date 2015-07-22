angular.module('contatooh').controller('ContatoController',  
	function($scope, $routeParams, $resource) {
			
		var Contato = $resource('/contatos/:id');
		
		if ($routeParams.contatoId) {
			var promise = Contato.get({id: $routeParams.contatoId}).$promise;
			promise.then(function(contato) {
				$scope.contato = contato;
			}, function(erro){
				$scope.mensagem = {
					texto: 'Nao foi possivel obter o contato do cliente.'	
				};
				console.log(erro);
			});	
		} else {
			$scope.contato = new Contato();
		}
		
		$scope.salva = function() {
			
			// var promise = Contato.save($scope.contato).$promise;
			// promise.then(function(){
			// 	$scope.mensagem = {
			// 		texto: 'Salvo com sucesso.'
			// 	};
			// 	$scope.contato = new Contato();
			// 	console.log('salvo');
			// }, function(erro){
			// 	$scope.mensagem = {
			// 		texto: 'Nao foi possivel salvar.'
			// 	};
			// 	console.log(erro);
			// });
			
			var promise = $scope.contato.$save();
			promise.then(function(){
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