angular.module('contatooh').controller('ContatosController', 
	function($scope) {
		$scope.total =0;
		$scope.incrementa = function() {
			$scope.total++;	
		};
		
		$scope.filtro='';
		$scope.contatos = [
			{ 	"_id": 1,
				"nome" : "Contato angular 1",
				"email": "cont1@empresa.com.br"
			},
			{ 	"_id": 2,
				"nome" : "Contato angular 2",
				"email": "cont2@empresa.com.br"
			},
			{ 	"_id": 3,
				"nome" : "Contato angular 3",
				"email": "cont3@empresa.com.br"
			},
			{ 	"_id": 4,
				"nome" : "Lysandro Carioca",
				"email": "lysandroc@"
			}
		];
	}
);	