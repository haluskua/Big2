/*  Requirements    */
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');


//SASS COMPILER
gulp.task('sass', function () {
  return gulp.src('./sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('Css'));
});

//AUTOPREFIXER
gulp.task('autoprefix', function() {
  return gulp.src('./Css/*.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
  }))
    .pipe(gulp.dest('dist'));
});


gulp.task('default', ['sass', 'autoprefix']);
