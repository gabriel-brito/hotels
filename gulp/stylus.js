import gulp from 'gulp';
import stylus from 'gulp-stylus';

gulp.task('stylus', ()=> {
  return gulp.src('./source/_styles/main.styl')
    .pipe(stylus({
      'include css': true
    }))
    .pipe(gulp.dest('./public/'));
});