const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const php = require("gulp-connect-php"); //for PHP server
const uglify = require("gulp-uglify-es").default;
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const reload = browserSync.reload;
const concat = require("gulp-concat");

gulp.task("browser-sync", () => {
  browserSync.init({
    server: {
      baseDir: "./build"
    }
  });
});

gulp.task("minify-js", function() {
  console.log(">>minify js");
  return gulp
    .src("components/js/*.js")
    .pipe(concat("scripts.min.js"))
    .pipe(uglify(/* options */))
    .pipe(gulp.dest("build/js"));
});

gulp.task("minify-js-vendors", function() {
  console.log(">>minify js vendors");
  return gulp
    .src("components/js/vendors/*.js")
    .pipe(uglify(/* options */))
    .pipe(concat("vendors.min.js"))
    .pipe(gulp.dest("build/js"));
});

gulp.task("compile-sass", function() {
  console.log(">>get sassy");
  return gulp
    .src("components/sass/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("build/css"));
});

gulp.task("php", function() {
  php.server({ base: "./build", port: 8010, keepalive: true });
});

gulp.task("watch", ["browser-sync"], function() {
  gulp.watch("components/sass/*.scss", ["compile-sass"]);
  gulp.watch("components/js/*.js", ["minify-js"]);
  gulp.watch("components/js/vendors/*.js", ["minify-js-vendors"]);
  gulp.watch("components/sass/*.scss").on("change", reload);
  gulp.watch("components/js/*.js").on("change", reload);
  gulp.watch("components/js/vendors/*.js").on("change", reload);
  gulp.watch("build/*.html").on("change", reload);
});
