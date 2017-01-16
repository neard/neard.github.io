var gulp = require('gulp'),
  readConfig = require('read-config'),
  config = readConfig('_config.yml'),
  browserSync = require('browser-sync'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');

gulp.task('scripts-build', function() {
  browserSync.notify('<span style="color: grey">Reloading:</span> scripts');
  return gulp.src(config.filters.js)
    .pipe(concat(config.files.js))
    .pipe(uglify())
    .pipe(gulp.dest(config.destination + '/' + config.paths.assets));
});

gulp.task('scripts-rebuild', ['scripts-build'], function () {
  browserSync.reload();
});