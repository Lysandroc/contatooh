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
	