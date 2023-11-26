const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const fileInclude = require("gulp-file-include");
const rename = require("gulp-rename");
const ejs = require("gulp-ejs");
const fs = require("fs");


// Sassコンパイル
const SassCompile = (done) => {
  gulp
    .src("src/assets/scss/*.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("./server/assets/css"));
};
exports.SassCompile = SassCompile;

// EJSコンパイル
const ejsCompile = () => {
  var json = JSON.parse(fs.readFileSync("./src/assets/json/meta.json", "utf-8"));
  gulp
    .src(["./src/**/*.ejs", "!" + "./src/**/_*.ejs"])
    .pipe(ejs({ json: json }))
    .pipe(
      rename({
        extname: ".html",
      })
    )
    .pipe(gulp.dest("./server/"));
};
exports.ejsCompile = ejsCompile;

// 監視ファイル
const watchFiles = (done) => {
  gulp.watch(["./src/**/*.ejs", "!./src/**/_*.ejs"], ejsCompile);
  done();
};

// タスク実行
exports.default = gulp.series(watchFiles, ejsCompile);

gulp.task("include", function () {
  //includeのコンパイル
  gulp.src(["src/**/*.html","!src/assets/**/*.html"])
    .pipe(fileInclude()).pipe(gulp.dest("server/"));
});
