var gulp = require("gulp"),
  readConfig = require("read-config"),
  config = readConfig("_config.yml");

gulp.task("watch", function() {
  gulp.watch(config.filters.css, ["styles-rebuild"]);
  gulp.watch(config.filters.js, ["scripts-rebuild"]);
  gulp.watch(config.filters.jekyll, ["jekyll-rebuild"]);
});