var requireDir = require('require-dir');
var browserSync = require('browser-sync').create();

// Require all tasks in gulpfile.js/gulp, including subfolders
requireDir('./gulp', { recurse: true });

var dirs = {
  'src': 'src',
  'dist': 'dist',
  'tmp': 'tmp'
};

gulp.task('default', ['serve']);
