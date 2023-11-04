const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const fileInclude = require("gulp-file-include");

//デフォルトタスク
gulp.task("default", function () {
  //sassのコンパイル
  gulp
    .src("src/assets/scss/*.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("./server/assets/css"));
});

gulp.task("include", function () {
  //includeのコンパイル
  gulp.src("src/**/*.html").pipe(fileInclude()).pipe(gulp.dest("server/"));
});

