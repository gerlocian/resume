(function () {
    'use strict';

    var express = require('express');
    var app = express();

    app.use(express.static(__dirname + '/assets'));

    app.get('/', function(req, res) {
        res.sendFile(__dirname + '/index.html');
    });

    app.listen(3000, function () {
        console.log('Listening on port 3000');
    });

}());