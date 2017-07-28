const gulp = require('gulp');
const gulp = require('gulp-autoprefixer');


gulp.task('autoprefix', function() {
  return gulp.src('./css/*.css')
  .pipe(autoprefixer({
    browsers: ['last 2 versions']
  }))
  .pipe(gulp.dest('dist/main.css'));
});

gulp.task('defaul', ['autoprefix']);
