angular.module('contatooh', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider.when('/contatos', {
			templateUrl: 'Partials/contatos.html',
			controller: 'ContatosController'
		});
		$routeProvider.when('/contato/:contatoId', {
			templateUrl: 'Partials/contato.html',
			controller: 'ContatoController'
		});
		$routeProvider.otherwise({redirectTo: '/contatos'});
	});