var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass');

gulp.task('connect', function() {
  connect.server({
    root: 'public/',
    port: 8080,
    livereload: true,
    fallback: 'public/index.html'
  });
});


gulp.task('html', function () {
  gulp.src('./public/*.html')
    .pipe(connect.reload());
});


gulp.task('sass', () =>{
  gulp.src('src/scss/main.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('watch', () =>{
  gulp.watch('public/*.html', ['html']);
  gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['connect', 'html', 'sass', 'watch']);