module.exports = function() {
    env: 'development',
    db: 'mongodb://localhost/contatooh',
    sauceTestName: 'Contato E2E Testing',
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.ClIENT_SECRET,
    seleniumUser: process.env.SELENIUM_USER,
    seleniumUserPassword: process.env.SELENIUM_USER_PASSWORD
};
