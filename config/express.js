var express = require('express')
  , expressLoad = require('express-load') 	
  , methodOverride = require('method-override')()
  , bodyParser = require('body-parser')
  , session = require('express-session')
  , cookieParser = require('cookie-parser')
  , passport = require('passport');
  
module.exports = function() {
	
	var app = express();
	app.set('port',3000);
	app.use(express.static('./public'));
	
	
	app.set('view engine','ejs');
	app.set('views','./app/views');
	
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json()); 
	app.use(methodOverride);
	app.use(cookieParser());
	app.use(session({
			secret: 'homem avestruz', 
			resave: true, 
			saveUninitialized: true
	}));
	app.use(passport.initialize());
	app.use(passport.session());
	
	
	expressLoad('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);
		
	return app;	
};