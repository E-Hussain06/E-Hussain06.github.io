'use strict';

var fs = require('fs');
var paths = {
    srcDir: './src/img',
    destDir: './dist/img'
};

function copyFile(src, dest) {
    var data = fs.readFileSync(src);

    fs.writeFile(dest, data, function (err) {
        if (err) return err;
    });
}

function copyContentsFromDirectory(src, dest) {
    var files = fs.readdirSync(src);
    files.forEach(function (file) {
        copyFile(path.resolve(src + '/' +file), path.resolve(dest + '/' + file));
    });
}

function moveImg() {
    copyFile(paths.srcDir, paths.destDir);
    copyContentsFromDirectory(paths.srcDir, paths.destDir);
};

module.exports = moveImg();