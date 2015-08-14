angular.module('contatooh')
	.factory('meuInterceptor', 
	function($location, $q) {  
    
    var interceptor = {
    	responseError: function(resposta) {
    		console.log(resposta.status);
            if (resposta.status == 401) {
    		  $location.path('/auth');
    		}
            return $q.reject(resposta);
            
    	}
    }

    return interceptor;
});