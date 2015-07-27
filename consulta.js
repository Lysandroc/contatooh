var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var _idProcurado = new ObjectID('55b3c3d07e4e117cdeb1a157');

MongoClient.connect('mongodb://127.0.0.1:27017/contatooh', 
	function(err, db) {
		if (err) {
			throw err;
		}
		db.collection('contatos').findOne(_idProcurado, 
			function(erro, contato) {
				if (erro) {
					throw erro;
				}
				console.log(contato);
			}
		);
	}
);