'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var utils = require('./utils');

var paths = {
    css: {
        dir: './dist/css/',
        file: 'style.min.css'
    },
    sass: {
        dir: './src/sass/',
        file: 'style.scss'
    },
    img: {
        src: './src/img/',
        dest: './dist/img/'
    }
};

gulp.task('sass', function () {
    // Gets all files ending with .scss
    return gulp.src(paths.sass.dir + paths.sass.file)
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename(paths.css.file))
        .pipe(gulp.dest(paths.css.dir))
});

gulp.task('watch:sass', function () {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
    console.log('Watching for changes...');
});

gulp.task('build', function() {
    utils(paths.img.src, paths.img.dest);
});

gulp.task('default', ['sass', 'watch:sass'], function() {
    console.log('Defaut tasks');
});