'use strict';

var fs = require('fs');

module.exports = function move(src, dest, callback) {

    fs.rename(src, dest, function (err) {
        if (err) {
            if (err.code === 'EXDEV') {
                copy();
            } else { 
                callback(err);
            }
            return;
        }
        callback();
    });

    function copy() {
        var read = fs.createReadStream(src);
        var write = fs.createWriteStream(dest);

        read.on('error', callback);
        write.on('error', callback);

        read.on('close', function () {
            fs.unlink(src, callback);
        });

        read.pipe(write);
    }
};