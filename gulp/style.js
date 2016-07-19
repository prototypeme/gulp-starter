var gulp        = require('gulp');
var sass        = require('gulp-sass');
var cleanCss    = require('gulp-clean-css');
var concatCss   = require('gulp-concat-css');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass-build', function() {
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
