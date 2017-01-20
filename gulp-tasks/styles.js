var gulp = require("gulp"),
  readConfig = require("read-config"),
  config = readConfig("_config.yml"),
  autoprefixer = require("gulp-autoprefixer"),
  browserSync = require("browser-sync"),
  concat = require("gulp-concat"),
  cleanCSS = require("gulp-clean-css");

gulp.task("styles-build", function() {
  browserSync.notify("<span style=\"color: grey\">Reloading:</span> styles");
  return gulp.src(config.filters.css)
    .pipe(cleanCSS({ keepSpecialComments: 0 }))
    .pipe(autoprefixer("last 2 version", "safari 5", "ie 8", "ie 9"))
    .pipe(concat(config.files.css))
    .pipe(gulp.dest(config.destination + "/" + config.paths.assets));
});

gulp.task("styles-rebuild", ["styles-build"], function () {
  browserSync.reload();
});