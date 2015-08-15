function verificaAutenticacao(req, res, next) {
		if(req.isAuthenticated()) {
			console.log(' autorizado');
			return next();
		} else {
			console.log('nao autorizado');
			res.status(401).json('Nao autorizado!');
		}
}

module.exports = function(app) {
	
	var controller = app.controllers.contato;
	
	//app.get('/contatos', controller.listaContatos);	
	//app.get('/contatos/:id', controller.obtemContato);
	//app.delete('/contatos/:id', controller.removeContato);
	
	app.route('/contatos')
	.get(verificaAutenticacao, controller.listaContatos)
	.post(verificaAutenticacao, controller.salvaContato);
	
	app.route('/contatos/:id')
	.get(verificaAutenticacao, controller.obtemContato)
	.delete(verificaAutenticacao, controller.removeContato);	
	
	
};
