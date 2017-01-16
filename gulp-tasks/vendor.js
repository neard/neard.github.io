var gulp = require('gulp'),
  readConfig = require('read-config'),
  config = readConfig('_config.yml'),
  del = require('del'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  mainBowerFiles = require('main-bower-files'),
  inject = require('gulp-inject'),
  filter = require('gulp-filter'),
  order = require('gulp-order'),
  cleanCSS = require('gulp-clean-css'),
  merge = require('merge-stream'),
  gutil = require('gulp-util');

var vendorToInject = [];

gulp.task('vendor-build', [
  'vendor-init',
  'vendor-clean',
  'vendor-styles',
  'vendor-scripts',
  'vendor-gfonts',
  'vendor-fonts',
  'vendor-img',
  'vendor-inject'
]);

gulp.task('vendor-init', function() {
  vendorToInject = [];
  return null;
});

gulp.task('vendor-clean', function(done) {
  del([
    config.destination + '/' + config.paths.assets + '/**/*',
    '!' + config.destination + '/' + config.paths.assets + '/' + config.files.js,
    '!' + config.destination + '/' + config.paths.assets + '/' + config.files.css
  ]);
  done();
});

gulp.task('vendor-scripts', function() {
  vendorToInject = merge(vendorToInject, gulp.src(mainBowerFiles(), { base: config.paths.bower })
    .pipe(filter(['**/*.js', '**/*.map', '!**/*.css.map']))
    .pipe(order(['**/jquery.js', '**/bootstrap.js', '**/photoswipe.js', '**/photoswipe-ui-default.js', '**/*.js']))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.destination + '/' + config.paths.assets)));
});

gulp.task('vendor-styles', function() {
  vendorToInject = merge(vendorToInject, gulp.src(mainBowerFiles(), { base: config.paths.bower })
    .pipe(filter(['**/*.css', '**/*.css.map']))
    .pipe(order(['**/github-markdown.css', '**/bootstrap.css', '**/photoswipe.css', '**/photoswipe/**/*.css', '**/*.css']))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.destination + '/' + config.paths.assets)));
});

gulp.task('vendor-gfonts', function() {
  vendorToInject = merge(vendorToInject, gulp.src(mainBowerFiles(), { base: config.paths.bower })
    .pipe(filter(['**/index']))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min.css' }))
    .pipe(gulp.dest(config.destination + '/' + config.paths.assets)));
});

gulp.task('vendor-fonts', function() {
  return gulp.src(mainBowerFiles(), { base: config.paths.bower })
    .pipe(filter(['**/*.eot', '**/*.woff', '**/*.svg', '**/*.ttf', '**/*.woff2']))
    .pipe(gulp.dest(config.destination + '/' + config.paths.assets));
});

gulp.task('vendor-img', function() {
  return gulp.src(mainBowerFiles(), { base: config.paths.bower })
    .pipe(filter(['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif']))
    .pipe(gulp.dest(config.destination + '/' + config.paths.assets));
});

gulp.task('vendor-inject', function() {
  return string_src(config.source + '/_data/' + config.files.vendor, '{\n  "js": [\n  ],\n  "css": [\n  ],\n  "html": [\n  ]\n}')
    .pipe(inject(vendorToInject, {
      empty: true,
      ignorePath: config.destination,
      starttag: '"{{ext}}": [',
      endtag: ']',
      transform: function (filepath, file, i, length) {
        return '  "' + filepath + '"' + (i + 1 < length ? ',' : '');
      }
    }))
    .pipe(gulp.dest('.'));
});

function string_src(filename, string) {
  var src = require('stream').Readable({ objectMode: true });
  src._read = function () {
    this.push(new gutil.File({
      cwd: "",
      base: "",
      path: filename,
      contents: new Buffer(string)
    }));
    this.push(null)
  };
  return src;
}