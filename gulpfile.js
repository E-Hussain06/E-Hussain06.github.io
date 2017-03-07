'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

var paths = {
    css: {
        dir: './dist/css/',
        file: 'style.min.css'
    },
    sass: {
        dir: './public/sass/',
        file: 'style.scss'
    }
}

gulp.task('sass', function () {
    // Gets all files ending with .scss
    return gulp.src(paths.sass.dir + paths.sass.file)
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename(paths.css.file))
        .pipe(gulp.dest(paths.css.dir))
});

gulp.task('watch:sass', function () {
    var wildcard = './public/sass/**/*.scss';
    gulp.watch(wildcard, ['sass']);
});