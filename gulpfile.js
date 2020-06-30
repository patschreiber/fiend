var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var tsify = require("tsify");
var sourcemaps = require("gulp-sourcemaps");
var buffer = require("vinyl-buffer");
var typedoc = require("gulp-typedoc");

var paths = {
  docgen: ["src/**/*"],
  pages: ["src/*.html"],
  assets: ["src/lib/data/**/*.png"],
};

gulp.task("docgen", function () {
  return gulp.src(paths.docgen).pipe(
    typedoc({
      module: "commonjs",
      target: "es2015",
      out: "docs/",
      name: "Fiend API Documentation",
    })
  );
});

gulp.task("copy-html", function () {
  return gulp.src(paths.pages).pipe(gulp.dest("dist"));
});

gulp.task("copy-data-assets", function () {
  return gulp.src(paths.assets).pipe(gulp.dest("dist/data/assets/"));
});

gulp.task(
  "default",
  gulp.series(gulp.parallel("copy-html", "copy-data-assets"), function () {
    return browserify({
      basedir: ".",
      debug: true,
      entries: ["src/main.ts"],
      cache: {},
      packageCache: {},
    })
      .plugin(tsify)
      .transform("babelify", {
        presets: ["@babel/preset-env"],
        extensions: [".ts"],
      })
      .bundle()
      .pipe(source("bundle.js"))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest("dist"));
  })
);
