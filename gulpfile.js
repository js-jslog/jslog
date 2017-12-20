const gulp = require('gulp');
const clean = require('gulp-clean');
const handlebars = require('gulp-compile-handlebars');
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

gulp.task('cleanreact', () => {
    return gulp.src('./public/js/react', {
        read: false
    })
    .pipe(clean({}, {
        force: true
    }))
});

gulp.task('html', () => {
    return gulp.src('./src/pages/**/*.hbs')
        .pipe(handlebars({}, {
            ignorePartials: true,
            batch: ['./src/partials'],
        }))
    .pipe(rename({
        extname: '.html'
    }))
    .pipe(gulp.dest('./pages'));
});

gulp.task('jsx', () => {
    return gulp.src('./src/jsx/**/*.jsx')
        .pipe(babel({
            "plugins": ["transform-react-jsx"],
            "presets": ["es2015"]
        }))
        .pipe(rename({
            extname: '.js'
        }))
        .pipe(gulp.dest('./public/js/react'));
});
gulp.task('webpack', () => {
  return gulp.src('src/jsx/article-box-row.jsx')
    .pipe(webpack( require('./webpack.config.js')))
    .pipe(gulp.dest('public/js/react'));
});
