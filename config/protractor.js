
exports.config = {
	specs: ['../test/e2e/**/*.js'],

	onPrepare: function() {
		browser.driver.get('http://localhost:3000')
		.then(function() {
			element(by.id('entrar')).click();
			browser.driver.findElement(by.id('login_field')).sendKeys('lysandrocb');
			browser.driver.findElement(by.id('password')).sendKeys('1twothree');
			browser.driver.findElement(by.name('commit')).click();
		});
	}
};
