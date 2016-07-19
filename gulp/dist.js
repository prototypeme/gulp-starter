var gulp       = require('gulp');
var sizereport = require('gulp-sizereport');

gulp.task('dist', ['script', 'sass-build', 'html', 'assets', 'sizereport']);

gulp.task('sizereport', function () {
    return gulp.src('./dist/*')
        .pipe(sizereport());
});
