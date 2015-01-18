'use strict';
var path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    winston = require('winston'),
    expressWinston = require('express-winston');

var app = express();
app.set('port', (process.env.PORT || 5000));

//serve up static assets 
app.use(express.static(path.resolve('./public')));
//adds logger to console 
app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console({
            json: false,
            colorize: false
        })
    ],
    meta: false,
    msg: 'HTTP {{req.method}} {{req.url}}',
    expressFormat: true,
    colorStatus: false
}));


app.use(bodyParser.json());


// sets the route / to basically be index.html 
app.get('/', function(req, res) {
    res.sendFile(path.resolve('../client/index.html'));
});

});

app.listen(app.get('port'), function() {
    console.log('Application running on Port: ' + app.get('port'));
});
