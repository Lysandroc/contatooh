var ContatosPage = new require('./pages/contatosPage');

describe('Pagina principal', function() {

	var pagina = new ContatosPage();

	beforeEach(function() {
			pagina.visitar();
	});

	it('Deve estar logado!', function() {
			pagina.obterUsuarioLogado().then(function(texto) {
					expect(texto.trim().length).toBeGreaterThan(0);
			});
	});

	it('Deve remover um contato da lista', function() {

		var totalAntes = pagina.obterTotalDeItensDaLista();

		element(by.repeater("contato in contatos").row(0)
		).element(by.css(".btn")).click();

		var totalDepois = pagina.obterTotalDeItensDaLista();

		expect(totalDepois).toBeLessThan(totalAntes);
	});
});
