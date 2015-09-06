var config = require('./config')();
exports.config = {
  sauceUser : config.sauceUser,
  sauceKey : config.sauceKey,
  capabilities : {
    'name': config.sauceTestName,
    'browserName': 'chrome',
    'tunnel-identifier': config.travisJobNumber,
    'build': config.travisBuild
  },

  specs: ['../test/e2e/**/*Spec.js'],
  onPrepare: function() {
      browser.driver.get('http://localhost:3000/#/auth');
      browser.driver.findElement(by.id('entrar')).click();
      browser.driver.findElement(by.id('login_field')).sendKeys('lysandroc');
      browser.driver.findElement(by.id('password')).sendKeys('mean.2016');
      browser.driver.findElement(by.name('commit')).click();
  }
};
