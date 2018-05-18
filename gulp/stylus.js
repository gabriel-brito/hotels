import gulp from 'gulp';
import stylus from 'gulp-stylus';
import cleanCSS from 'gulp-clean-css';

gulp.task('stylus', ()=> {
  return gulp.src('./source/_styles/main.styl')
    .pipe(stylus({
      'include css': true
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./public/'));
});