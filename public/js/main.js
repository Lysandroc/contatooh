angular.module('contatooh', ['ngRoute', 'ngResource'])
	.config(function($routeProvider) {
		
		$routeProvider.when('/contato', {
			templateUrl: 'Partials/contato.html',
			controller: 'ContatoController'
		});
		
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