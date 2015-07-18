module.exports = function(app) {
	
	var controller = app.controllers.contato;
	app.get('/contatos', controller.listaContatos);	
	//identificadores iguais, muda apenas o verbo do http
	//app.get('/contatos/:id', controller.obtemContato);
	//app.delete('/contatos/:id', controller.removeContato);
	
	app.route('/contatos/:id').get(controller.obtemContato).delete(controller.removeContato);	
};