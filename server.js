var http = require('http')
  , app =  require('./config/express')()
  ,        require('./config/passport')()
  , config = require('./config/config')()
  ,        require('./config/database')(config.db);

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express Server escutando na porta ' +app.get('port'));
});
