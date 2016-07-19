var gulp       = require('gulp');
var requireDir = require('require-dir');

// Require all tasks in gulpfile.js/gulp, including subfolders
requireDir('./gulp', { recurse: true })
