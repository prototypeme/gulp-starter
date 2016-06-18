var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var cleanCss    = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: ['./src', './dist']
    });
    gulp.watch('src/**/*.scss', ['sass']);
    gulp.watch('src/**/*.html').on('change', browserSync.reload);
    gulp.watch('src/**/*.js').on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src('src/**/*.scss')
        .pipe(sass({
          noCache: true,
          style: 'compact'
        }))
        .pipe(concatCss('index.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
