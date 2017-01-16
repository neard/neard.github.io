var gulp = require('gulp'),
  requireDir = require('require-dir'),
  runSequence   = require('run-sequence');

requireDir('./gulp-tasks', { recurse: true });

gulp.task('build', function(done) {
  runSequence('styles-build', 'scripts-build', 'vendor-build', 'jekyll-build', done);
});

gulp.task('serve', function(done) {
  runSequence('build', 'browser-sync', 'watch', done);
});

gulp.task('default', ['build']);