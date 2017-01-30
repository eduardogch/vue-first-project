var express = require('express');
var compression = require('compression');
var path = require('path');
var logger = require('morgan');
var app = express();

app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(logger('dev'));
app.use('/', express.static(path.join(__dirname, '/dist/')));

app.all('*', function(req, res) {
    res.redirect('/');
});

app.listen(app.get('port'), function() {
    console.log('Listening on port %d', app.get('port'));
});

module.exports = app;
