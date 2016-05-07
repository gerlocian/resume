(function () {
    'use strict';

    var livereload = require('livereload');
    var server = livereload.createServer();

    server.watch([
        __dirname + '/index.html',
        __dirname + '/assets/css/**/*.css',
        __dirname + '/assets/js/**/*.js'
    ]);

}());
