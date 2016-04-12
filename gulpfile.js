var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', () =>{
  gulp.src('src/scss/main.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('public/stylesheets'));
});


gulp.task('watch', () =>{
  gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);