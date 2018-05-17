import gulp from 'gulp';
import watch from 'gulp-watch';

gulp.task('watch', () => {
  return watch('./source/**/*')
    .pipe(gulp.dest('./public/'))


});