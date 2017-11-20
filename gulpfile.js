const gulp = require('gulp');
const clean = require('gulp-clean');
const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');

gulp.task('clean', () => {
    return gulp.src('./pages', {
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
