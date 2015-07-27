var mongoose = require('mongoose');
module.exports = function(uri) {
	
	mongoose.set('debug', true);
	
	mongoose.connect(uri);
	
	mongoose.connection.on('connected', function() {
		console.log('Mongoose foi conectado na uri: '+uri);
	});
	
	mongoose.connection.on('disconnected', function() {
		console.log('Mongoose foi desconectado na uri: '+uri);
	});

	mongoose.connection.on('error', function(erro) {
		console.log('Mongosse, aconteceu o seguinte erro na conexao: '+erro);
	});	
	
	process.on('SIGINT', function() {
		mongoose.connection.close(function() {
			console.log('Mongoose, conexao encerrada com sucesso!');
			process.exit(0);
		});
	});
};