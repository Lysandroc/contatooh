var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function() {
	
	var Usuario = mongoose.model('Usuario');
	
	passport.use(new GitHubStrategy( {
		clientID: '8450603cc2df9f219549',
		clientSecret: 'b5ece746d1020ba117becc81e389d225c182b660',
		callbackUrl: 'http://localhost:3000/auth/github/callback' 
		}, function(acessToken, refreshToken, profile, done) {
			Usuario.findOrCreate(
				{ "login": profile.username },
				{ "nome": profile.username},
				function(erro, usuario) {
					if(erro) {
						console.log(erro);
						return done(erro);
					}
					return done(null, usuario);
				});		
		})
	)};