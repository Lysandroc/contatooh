var passport = require('passport')
  , GitHubStrategy = require('passport-github').Strategy
  , mongoose = require('mongoose')
	, config = require('./config')();

module.exports = function() {

	var Usuario = mongoose.model('Usuario');

	passport.use(new GitHubStrategy( {

		clientID: config.clientID,
		clientSecret: config.clientSecret,
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
					console.log('critando usuario'+usuario);
					return done(null, usuario);
				});
		})
	);

	passport.serializeUser(function(usuario, done) {
		console.log('serialize usuario id'+usuario._id);
	  	done(null, usuario._id);
	});

	passport.deserializeUser(function(id, done) {
	  Usuario.findById(id).exec()
	  .then(function(usuario) {
		console.log('deserialize usuario'+usuario);
	  	done(null, usuario);
	  });
	});
};
