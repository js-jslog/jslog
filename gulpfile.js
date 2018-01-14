const gulp = require('gulp');
const clean = require('gulp-clean');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');

gulp.task('cleanpages', () => {
    return gulp.src('./pages', {
        read: false
    })
    .pipe(clean({}, {
        force: true
    }))
});

gulp.task('publishhtml', () => {
    return gulp.src('./src/html/**.*')
    .pipe(gulp.dest('./pages'))
});

gulp.task('cleanreact', () => {
    return gulp.src('./public/js/react', {
        read: false
    })
    .pipe(clean({}, {
        force: true
    }))
});

gulp.task('webpack', () => {
  return gulp.src('THIS IS INSIGNIFICANT')
    .pipe(webpack( require('./webpack.config.js')))
    .pipe(gulp.dest('public/js/react'));
});
