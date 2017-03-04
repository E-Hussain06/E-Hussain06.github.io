'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

var config = require('./lib/config.js');

gulp.task('sass', function () {
    // Gets all files ending with .scss
    return gulp.src(config.sass.dir + config.sass.file)
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename(config.css.file))
        .pipe(gulp.dest(config.css.dir))
});

gulp.task('watch:sass', function () {
    var wildcard = './public/sass/**/*.scss';
    gulp.watch(wildcard, ['sass']);
});