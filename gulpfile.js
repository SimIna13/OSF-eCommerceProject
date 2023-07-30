var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');

// sass.compiler = require('node-sass');

gulp.task('scss', function () {
    return gulp.src('./assets/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('css', async function () {
    gulp.src('./assets/css/*.css')
        .pipe(uglifycss({
            "uglyComments": true
        }));
        // .pipe(gulp.dest('./dist/'));
});

gulp.task('run',gulp.series('scss','css'));

gulp.task('watch', function () {
    gulp.watch('./assets/scss/*.scss',gulp.series('scss'));
    gulp.watch('./assets/css/*.css',gulp.series('css'));
});

gulp.task('default',gulp.series('run','watch'));