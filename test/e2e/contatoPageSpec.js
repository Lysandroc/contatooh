var ContatoPage = new require('./pages/contatoPage');

describe('Cadastro de contatos', function() {

		var pagina = new ContatoPage();

		beforeEach(function() {
				pagina.visitar();
		});

		it('Deve cadastrar um contato', function() {
				var aleatorio = Math.floor((Math.random() * 1000) + 1);

				pagina.digitarNome('teste'+aleatorio);
				pagina.digitarEmail('teste@teste'+aleatorio);
				pagina.selecionarPrimeiraEmergenciaDaLista();
				pagina.salvar();

				expect(pagina.obterMensagem()).toContain('sucesso');
		});
});
