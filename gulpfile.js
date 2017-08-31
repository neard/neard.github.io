var gulp = require("gulp"),
  requireDir = require("require-dir"),
  runSequence   = require("run-sequence");

requireDir("./gulp-tasks", { recurse: true });

gulp.task("build", function(done) {
  runSequence("assets-build", "assets-vendor-build", "jekyll-build", done);
});

gulp.task("serve", function(done) {
  runSequence("build", "browser-sync", done);
});

gulp.task("default", ["build"]);