var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    csso = require('gulp-clean-css'),
    rename = require('gulp-rename');
    plumber = require('gulp-plumber');

gulp.task('sass', function () {
    return gulp.src('source/scss/style.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 20 versions']
        }))
        .pipe(gulp.dest('public/css'))
        .pipe(csso())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function () {
    gulp.watch('source/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);
gulp.task('w', ['watch', 'sass']);