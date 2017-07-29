/*  Requirements    */
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');


//COPY HTML files
gulp.task('copyHtml', function (){
	return gulp.src('./**.html')
		.pipe(gulp.dest('dist'));
});

//SASS COMPILER
gulp.task('sass', function () {
  return gulp.src('./sass/*.sass')
    .pipe(sass().on('error', sass.logError))
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

//MINIFY js file
gulp.task('minify', function  () {
	return gulp.src('./sass/scripts/*.js')
	.pipe(concat('min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist'));
});


gulp.task('default', ['copyHtml', 'sass', 'autoprefix', 'minify']);
