var config = require('./config/config')()
  , http = require('http')
  , app =  require('./config/express')();

require('./config/passport')();
require('./config/database')(config.db);

http.createServer(app).listen(3000);
