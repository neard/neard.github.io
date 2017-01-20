var gulp = require("gulp"),
  readConfig = require("read-config"),
  config = readConfig("_config.yml"),
  browserSync = require("browser-sync");

gulp.task("browser-sync", function() {
  browserSync({
    server: {
      baseDir: config.destination
    },
    open: false
  });
});