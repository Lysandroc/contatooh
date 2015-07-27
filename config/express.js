var express = require('express')
  , expressLoad = require('express-load') 	
  , methodOverride = require('method-override')()
  , bodyParser = require('body-parser');

module.exports = function() {
	
	var app = express();
	app.set('port',3000);
	app.use(express.static('./public'));
	app.set('view engine','ejs');
	app.set('views','./app/views');
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json()); 
	app.use(methodOverride);
	
	expressLoad('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);
		
	return app;	
};