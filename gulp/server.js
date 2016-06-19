var gulp = require('gulp');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: [dirs.src, dirs.dist]
    });
    gulp.watch('src/**/*.scss', ['sass']);
    gulp.watch('src/**/*.html').on('change', browserSync.reload);
    gulp.watch('src/**/*.js').on('change', browserSync.reload);
});
