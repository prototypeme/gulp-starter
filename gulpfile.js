var gulp       = require('gulp');
var config     = require('./config');
var requireDir = require('require-dir');
var browserSync = require('browser-sync').create();

// Require all tasks in gulpfile.js/gulp, including subfolders
requireDir('./gulp', { recurse: true });

console.log(config.root);

gulp.task('default', ['serve']);

module.exports = gulp;
