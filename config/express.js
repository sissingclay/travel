/**
 * Created by Clay on 07/11/15.
 */
var express     = require('express');
var exphbs      = require('express-handlebars');

module.exports  = function() {
    var app = express();
    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    require('../app/routes/index.server.routes.js')(app);
    app.use(express.static('./public'));
    return app;
};